---
name: adr-example
description: Read when writing your first ADR. Shows completed Astro framework decision as example.
category: decision
when_to_use:
- Reference when writing your first ADR
---
# 1. Use Astro for Static Site Generation

Date: 2025-01-14
Status: Accepted

## Context

Need to build a personal professional website (dev.krough.org) targeting senior technical leaders.
Site is content-focused with 5 pages, no complex interactivity required.
Must be fast, SEO-friendly, and cost-effective to host.

## Decision

Use Astro 4+ as the static site generator with Tailwind CSS for styling.
Deploy to GitHub Pages with GitHub Actions for CI/CD.

## Consequences

**Positive**:
- Zero JavaScript by default, maximum performance
- Excellent SEO with pre-rendered HTML at build time
- Free hosting via GitHub Pages with global CDN
- Component-based architecture for maintainability
- Fast builds (~400-500ms for 5 pages)

**Negative**:
- Limited client-side interactivity (trade-off accepted for this use case)
- Smaller ecosystem compared to Next.js/React
- Team members need to learn Astro conventions

**Migration**:
Initialize with `npm create astro@latest`, configure Tailwind integration,
set up GitHub Actions deployment workflow targeting GitHub Pages.