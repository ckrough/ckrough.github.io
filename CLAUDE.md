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

## Architecture

- **Static Generation:** All pages pre-rendered at build time, zero client-side JS by default
- **File-based Routing:** `src/pages/*.astro` become routes (e.g., `services.astro` → `/services`)
- **BaseLayout:** All pages use `BaseLayout.astro` which provides Header, Footer, SEO meta. Props: `title` (required), `description?`, `ogImage?`

## Design System

Brand colors and typography defined in `tailwind.config.mjs`:

| Utility | Color | Usage |
|---------|-------|-------|
| `bg-foundation` | #F5F0E8 (warm cream) | Page background |
| `bg-surface` | #FAFAF8 | Card backgrounds |
| `text-structure` | #3D3D3D (charcoal) | Primary text |
| `text-muted` | #6B6B6B | Secondary text |
| `text-accent` / `bg-accent` | #E07A5F (burnt coral) | **CTAs only** |
| `border-border` | #E5E5E5 | Borders |

**Typography:** `font-heading` (Playfair Display), `font-body` (Inter)

**Spacing:** Custom scale `xs` through `3xl` (0.5rem to 6rem)

## Content Voice

Confident, direct, understated. Peer-to-peer with senior technical leaders. Lead with outcomes and metrics. No buzzwords or jargon.

Example: "I've led platform engineering through 4 acquisitions and 2 IPOs. Now I help organizations figure out where AI actually works—and build it when it does."

## Deployment

GitHub Actions deploys to GitHub Pages on push to `main`. Custom domain (`dev.krough.org`) configured via `public/CNAME`.
