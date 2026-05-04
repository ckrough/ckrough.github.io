---
title: "Evaluating Design in Agentic Development"
description: "A document-loader A/B where the synthetic corpus said reject and a real-world rerun said accept. Notes on corpus shape, joint metrics, and the evaluation criteria I had wrong."
pubDate: 2026-05-04
tags: [evaluation, methods]
---

Many developers are shipping agent pipeline changes after a handful of outputs look better than the previous handful. While there is no de facto standard for evaluating pipeline changes yet, techniques are emerging: Anthropic's [`skill-creator`](https://github.com/anthropics/skills/blob/main/skills/skill-creator/SKILL.md#running-and-evaluating-test-cases) skill includes eval logic that generates and scores assertions, and the emerging [Agent Skills](https://agentskills.io/skill-creation/evaluating-skills) standard publishes an evaluation specification built on assertion-based scoring.

When making changes to your agent pipeline or prompts, one or two good test results do not tell you whether a change is an improvement. You learn that only by running the change against a large sample corpus against test assertions you wrote or reviewed deliberately.

This post is one example of that kind of evaluation and, more importantly, the data it produced and how that data drove decisions about design changes. The work is on [Drover](https://github.com/ckrough/drover), my open-source document classifier. Drover supports user-defined taxonomies for any document set; for this evaluation I used a household-document taxonomy that ships as one of the canonical examples.

I ran an accuracy comparison of two document loaders, `unstructured` and `docling`, against a corpus of sample documents and a list of decision criteria. The first test results prompted me to reject the changes. After further consideration, the second test, with a different corpus and a revised view of what the criteria should measure, said accept.

What follows is the test design, the data from both runs, and the criteria I had wrong.

## What change was I testing?

Drover routes documents to organized filesystem paths by extracting structured fields (domain, category, doctype, vendor, date) with an LLM and assembling them into a path. The text the LLM sees comes from a document loader. The original loader I chose was [`unstructured`](https://github.com/Unstructured-IO/unstructured), which extracts a flat text layer in roughly reading order. The replacement candidate was [`docling`](https://github.com/docling-project/docling), a structure-aware parser that recognizes layout regions, runs full-page OCR on pages with image content, and emits a richer document model (DoclingDocument Object). Docling also extends the format coverage of the pipeline: OCR over scans and embedded images, plus support for several formats `unstructured` does not handle.

My initial expectation was that Docling's structural awareness alone would improve classification accuracy on the formats already supported (mostly just text). Section headings carry doctype signal, vendor blocks carry vendor signal, date fields are layout-anchored. A structured representation should make those signals easier for the LLM to read. 

That OCR and additional format-coverage would bring other benefits did not enter consideration until after the first test failed.

## How Drover runs evaluations

I keep the eval harness in the same repo as the classifier so a config change can be tested in the same branch it was made. A run takes three things from me: a sample set, a ground-truth file, and a run config.

The sample corpus is a folder of documents under `eval/samples/`. The ground truth is a JSONL file at `eval/ground_truth/{name}.jsonl`, one assertion per document:

```json
{"filename": "medical_bill.pdf", "domain": "medical", "category": "expense", "doctype": "invoice", "vendor": "Northern Virginia Medical Center", "date": "20241101"}
```

I require `filename`, `domain`, `category`, and `doctype` on every line. `vendor`, `date`, and `subject` get scored only when I filled them in. I write assertions by hand, or generate them and review every line before they count as ground truth to ensure that the assertions match what the consumer (human) intends, not what the LLM assumed during sample generation.

The run config names the model (defaulting to gemma4 lately), taxonomy, and document loader. For this evaluation I changed one line in the config (`loader: docling`) and reran. Everything else carried over.

The evaluator runs the classifier on each document, checks each axis of the structured output against the assertion for equality, and aggregates the per-document booleans into per-axis accuracy. Path-joint (domain ∩ category ∩ doctype) and filename-joint (vendor ∩ date) accuracies are computed from the same booleans. Output is a JSON dump with per-document comparisons, confusion matrices, and aggregate accuracies, suitable for diffing run-to-run. You can see more about this in the Drover repo under [`/eval`](https://github.com/ckrough/drover/tree/main/eval). There's a second example of a similar process using llm-as-judge, and with more documentation, in my [`Advisors` skill](https://github.com/backchainai/backchain-plugins/tree/main/advisors/evals) project.

Exact-match works for Drover because the classifier emits canonical taxonomy values. For systems that emit free text (chat agents, summaries, RAG answers), I would swap the equality check for an LLM-as-judge call against the same assertion. 

## Designing the test

The test was an accuracy comparison on an 80-document corpus balanced across the 16-domain household taxonomy used for this evaluation: at least five documents per domain, two-plus categories per domain, two-plus doctypes per category, with 41 documents exceeding the 512-token threshold that had previously been a known failure mode in the pipeline.

The corpus design itself drew on a lesson from earlier in the project. A small sample set document evaluation of an unrelated chunking-strategy comparison had produced identical predictions across all six strategies tested, because *only one of the three documents was long enough to exercise any of the strategies*. The lesson was that corpus structural variety, not corpus size, is what makes a comparison meaningful. The 80-document corpus was built with that lesson in mind.

I wrote down seven decision criteria before running the test:

| Trigger | Threshold | Observed | Result |
|---|---|---|---|
| LLM category lift | ≥ +5pp | gemma4: −3.8pp; haiku: −1.3pp | FAIL |
| LLM doctype regression | ≥ −2pp tolerance | gemma4: −2.5pp | FAIL |
| LLM domain regression | ≥ −2pp tolerance | gemma4: 0.0pp; haiku: +1.3pp | pass |
| Format parity | 0 regressions | 3 regressions (`.eml`, `.epub`, `.rtf`) | FAIL |
| Per-doc loader latency | < 5x current | ~42x | FAIL |
| MIT-only deps | required | satisfied | pass |
| No runtime network calls | required | first-run model fetch | partial |

Five of seven failed. The decision at that time was to reject the changes and stick with `unstructured`.

## Why I second-guessed the results

The 80-document corpus was synthetic, generated by Claude Sonnet 4.6 from per-doctype Markdown templates and rendered to PDF. When `unstructured` parsed those PDFs, the section text already fit a flat reading order with explicit heading text inline ("Bill To" on its own line, "INVOICE" as the first non-blank line). Structure was preserved in the sample text layer, unintentionally boosting scores for the document loader test. Docling had no lost structure to recover. All it could do was introduce small parsing variations that cost accuracy on the clean synthetic text.

The corpus rewarded `unstructured` for the parsing it already did well, and gave docling no recovered structure to credit. A second test with a real-world document set including scans, multi-column statements, and embedded image regions where vendor identity actually lived, would test a different question.

## Building a corpus that exercised the real failure surface

I assembled a collection of real-world documents; scanned medical records, multi-column bank statements, lease agreements with image-based letterhead, mortgage closing pages where dates lived in stamped fields. I re-ran the tests against this new collection with the same test configuration.

Per-axis accuracy on documents that both loaders successfully processed:

| Axis | Docling + full-page OCR | unstructured |
|---|---|---|
| domain | 0.545 | 0.636 |
| category | 0.455 | 0.273 |
| doctype | 0.727 | 0.545 |
| vendor | 0.182 | 0.364 |
| date | 0.364 | 0.636 |
| **path joint (domain ∩ category ∩ doctype)** | **0.455** | **0.182** |
| filename joint (vendor ∩ date) | 0.091 | 0.273 |

Docling regresses on domain, vendor, date, and the filename-joint metric. It improves on category, doctype, and the path-joint metric. Notably, the per-axis result is mixed, but the joint metrics are not.

## Reading the joint metrics

Drover's user-facing output is a path: `{domain}/{category}/{doctype}/{filename}`. A wrong path puts the file in a folder where the user is unlikely to find it. The other attributes, which scored worse with docling, will be important for other features like OS tagging, and probably for future features, but I am going to assume I can improve those scores in other ways while using docling (prompt improvements, etc). Per-axis accuracy on domain, vendor, and date contributes to it but does not, by itself, decide success or failure.

The path-joint metric (the conjunction of domain, category, and doctype) decides whether the system improved. With Path-joint: 0.455 vs 0.182, Docling improves it by 2.5x.

## What I got wrong about it

The format-parity criterion was wrong. It measured per-format regression on three text-native formats (`.eml`, `.epub`, `.rtf`) and treated any regression as failure. Docling's strength is PDF, images, and scanned content, which is the bulk of what Drover processes in the real world; its weakness on text-native formats trades a few points on basic text for the +27 path-joint percentage points it adds on PDFs and scans. 

The category-lift criterion was also too narrow. A +5pp category-accuracy threshold on the synthetic corpus failed to credit the structural improvement docling brought to scanned and multi-column content, because the synthetic corpus did not contain any.

The synthetic-corpus issue and the criteria-design issue were both visible only after a real-world rerun showed what the original test set had missed.

## Limitations

The real-world corpus is small (n=14, n=11 in the joint comparison). It was sufficient to flip my decision when the gap is 2.5x and the structural mechanism is independently identifiable, but it is not a stable accuracy point estimate. The next step is expanding the real-world corpus to a size that can produce stable per-axis estimates.

The current real-world test set contains PII, so ground truth is gitignored and lives only on local disk, it's not in the repo... you'll have to provide your own for now.
