# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Overview

Personal professional website for Chris Krough (dev.krough.org) - Astro static site with Tailwind CSS, deployed to GitHub Pages.

## Commands

```bash
npm run dev              # Start development server (localhost:4321)
npm run build            # Type check (`astro check`) and build for production
npm run preview          # Preview production build locally
```

**Dev server gotchas:** `npm run dev` fails under the Claude Code sandbox with `EPERM ::1:4321`; run it with `dangerouslyDisableSandbox: true`. Do not pipe it through `head`/`tail` — when the pipe closes, the server dies. Use `run_in_background: true` and tail the task output file instead.

## Architecture

- **Static Generation:** All pages pre-rendered at build time, zero client-side JS by default
- **File-based Routing:** `src/pages/*.astro` become routes (e.g., `services.astro` → `/services`)
- **BaseLayout:** All pages use `BaseLayout.astro` which provides Header, Footer, SEO meta. Props: `title` (required), `description?`, `ogImage?`

## Design System

Dark theme. Brand colors and typography defined in `tailwind.config.mjs`:

| Utility | Color | Usage |
|---------|-------|-------|
| `bg-foundation` | #2F455B (slate) | Page background |
| `bg-surface` | #3D5469 (lighter slate) | Card backgrounds |
| `text-structure` | #F5F0E8 (cream) | Primary text |
| `text-muted` | #8FA8B4 (light gray-blue) | Secondary text |
| `text-accent` / `bg-accent` | #E07A5F (burnt coral) | **CTAs only** |
| `border-border` | #50636F (gray) | Borders |

**Typography:** `font-heading` (Inter SemiBold for h1/h2, Medium for h3/h4), `font-body` (Inter)

**Spacing:** Custom scale `xs` through `3xl` (0.5rem to 6rem)

**Section rhythm:** Long pages alternate `section-spacing bg-foundation-deep` with plain `section-spacing` for visual cadence. Preserve the alternation when adding or removing sections.

## Content Voice

Confident, direct, understated. Peer-to-peer with senior technical leaders. Lead with outcomes and metrics. No buzzwords or jargon. No em-dashes in user-visible copy (use colons, parens, or commas). Methodology and opinion pages (`/methods`, `/references`) use first-person voice.

Global writing-voice rules (em-dash policy, AI-slop patterns) live in `~/.claude/rules/writing-voice.md`. Brand voice details live in `~/Documents/professional/brand/brand-voice-guide.md`.

Example: "I've led platform engineering through 4 acquisitions and 2 IPOs. Now I help organizations figure out where AI actually works, and build it when it does."

## Deployment

GitHub Actions deploys to GitHub Pages on push to `main`. Custom domain (`dev.krough.org`) configured via `public/CNAME`.

## Adding a Note (Blog Post)

Posts live in the `notes` content collection. Authoring is a single markdown file plus a git push.

1. Create `src/content/notes/<slug>.md`. The filename becomes the URL: `/notes/<slug>`.
2. Add frontmatter:

   ```yaml
   ---
   title: "Post title"
   description: "One- or two-sentence summary. Shown on the /notes index and in the RSS feed: write it for that purpose."
   pubDate: 2026-05-04
   updatedDate: 2026-05-10  # optional
   tags: [evaluation, methods]  # optional
   draft: false  # set true to author without publishing
   ---
   ```

3. Write the body in standard markdown.
4. Commit and push to `main`. GitHub Actions builds and deploys.

Schema is enforced by Zod in `src/content/config.ts`. `astro check` (run by `npm run build`) catches schema violations before deploy.

The `/notes` index groups posts by month. The RSS feed at `/rss.xml` mirrors the same set (drafts excluded). Tags render as chips on the index and post pages but do not yet have per-tag pages.
