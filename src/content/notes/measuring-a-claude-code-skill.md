---
title: "Measuring a Claude Code skill: assertion-based LLM-as-judge with claude --bare"
description: "A 60-trial A/B of the Advisors plugin against a no-skill baseline: 96% vs 45%, zero parse failures. Open harness, clean-room isolation, reproducible from a public repo."
pubDate: 2026-04-20
tags: [evaluation, claude-code, methods]
---

When I release a new Claude Code skill, I want to know whether it made the output better or just changed it. Prompts have no ground truth, so "this feels sharper" is not a measurement. Running a skill twice and eyeballing the diff is worse: I pick the one I remember liking. I needed a harness that grades output against a fixed rubric and runs the same way every release.

This post is how I measure the Advisors plugin. The harness and rubric are public, in [advisors/evals](https://github.com/backchainai/backchain-plugins/tree/main/advisors/evals). The method generalizes to any Claude Code skill.

## What I measure

Two arms, same scenario:

- **With-skill.** Advisors plugin enabled, the scenario runs through the full advisory panel.
- **Baseline.** Bare prompt, no plugin, no ambient context, same scenario.

Both arms run in `claude --bare` sessions so nothing from my operator environment leaks in. The judge scores each output against a rubric of assertions specific to the scenario.

## Why assertion-based grading

Free-form scoring drifts. Ask a judge to rate an output "from 1 to 10" and identical responses come back as 7 on Monday and 9 on Thursday. Ask it to decide "does the output cite at least one ownership cost?" and you get the same answer every time. Assertions are boolean with evidence: the judge returns PASS or FAIL plus an excerpt that supports the verdict. I track pass rates across runs.

The grader returns structured JSON enforced by `--json-schema`. No regex scraping, no try/except around parsing. Every output the judge produces loads cleanly into the results table.

## Clean-room isolation

Ambient state pollutes measurement. If my user-level `CLAUDE.md` loads during a run, the with-skill arm inherits rules the baseline never sees. The skill looks better than it is, and the result does not reproduce for anyone else.

`claude --bare` strips that off. No hooks, no plugins, no `CLAUDE.md` auto-discovery. The skill under test is loaded explicitly. The baseline gets nothing. What lands in the transcript is attributable to the two prompts and the skill definition, not my local setup.

## The numbers

Most recent run, scenario `eval-boat-rental`:

| Arm | Pass rate | Trials | Parse failures |
| --- | ---: | ---: | ---: |
| Advisors plugin | 96% | 60 | 0 |
| Bare-prompt baseline | 45% | 60 | 0 |

The gap is 51 points. The harness writes results to a gitignored directory by design, so these specific numbers are not in the public repo: clone the harness, run it, produce your own. Expect similar separation, different exact figures.

## What I noticed

Two things stood out.

First, the baseline was not uniformly weak. It passed several assertions cleanly. It failed on the ones that demanded structured multi-perspective reasoning, which is exactly what Advisors adds. That is the clearest signal the skill does the work the rubric asks about, not just pads the response.

Second, zero parse failures across 60 trials means the JSON-schema-enforced grader is stable enough to trust pass-rate deltas below ten points. Without that floor, small improvements would sink into noise.

## Reproduce it

The harness is a small Python runner. From a clone of the plugins repo:

```bash
uv run --project advisors/evals run_evals.py
```

To target one skill and scenario:

```bash
uv run --project advisors/evals run_evals.py --skill advisor-visionary --scenario eval-boat-rental
```

Full usage, grader prompt, and rubric definitions live in [advisors/evals/README.md](https://github.com/backchainai/backchain-plugins/blob/main/advisors/evals/README.md). The approach generalizes: define assertions in a skill's `evals/evals.json`, run the harness, read the pass rates.

More on where this fits in my practice: [Methods](/methods).
