# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a personal portfolio site built with MkDocs Material, deployed to GitHub Pages at https://ckrough.github.io.

## Development Commands

```bash
# Activate virtual environment
source .venv/bin/activate

# Install dependencies
pip install mkdocs-material

# Start local development server (hot reload)
mkdocs serve

# Build static site to site/ directory
mkdocs build

# Deploy to GitHub Pages (usually handled by CI)
mkdocs gh-deploy --force
```

## Architecture

- **`mkdocs.yml`** - Site configuration, navigation structure, theme settings, and markdown extensions
- **`docs/`** - All content as markdown files; navigation structure defined in `mkdocs.yml` nav section
- **`.github/workflows/deploy.yml`** - Auto-deploys on push to main/master branch

## Content Structure

The `nav` section in `mkdocs.yml` defines page hierarchy. To add a new page:
1. Create the markdown file in `docs/`
2. Add it to the `nav` section in `mkdocs.yml`

## Deployment

Automated via GitHub Actions. Pushing to `main` or `master` triggers build and deploy to GitHub Pages.
