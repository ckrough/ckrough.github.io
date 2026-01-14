# dev.krough.org

Personal professional website for Chris Krough - Engineering Leader specializing in Platform Architecture and AI Transformation.

## Overview

Professional brand website built with Astro, showcasing 20 years of engineering leadership experience across 2 IPOs, 4 acquisitions, and AI transformation consulting through Faberworks.

**Live Site:** https://dev.krough.org

## Tech Stack

- **Framework:** Astro 4+ (static site generation)
- **Styling:** Tailwind CSS v3
- **Hosting:** GitHub Pages
- **Domain:** dev.krough.org (custom domain via CNAME)

## Quick Start

### Prerequisites

- Node.js 20+
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/ckrough/ckrough-github-io.git
cd ckrough-github-io

# Install dependencies
npm install

# Run development server
npm run dev
```

The site will be available at `http://localhost:4321`

## Development Commands

```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run preview      # Preview production build locally
npm run astro        # Run Astro CLI commands
```

## Site Structure

- **Home** (`/`) - Introduction, proof points, current focus
- **Services** (`/services`) - AI transformation, platform engineering, M&A due diligence, engineering leadership
- **Projects** (`/projects`) - RAG systems, document classification, development tools, open source
- **Experience** (`/experience`) - Career highlights and outcomes
- **Contact** (`/contact`) - Contact information and social links

## Brand Identity

**Theme:** "Modern Industry / Reborn Code" aesthetic

**Colors:**
- Page background: #F5F0E8 (warm cream)
- Card surface: #FAFAF8 (warm white)
- Primary text: #3D3D3D (charcoal)
- Accent (CTAs): #E07A5F (burnt coral)

**Typography:**
- Headlines: Playfair Display (serif)
- Body: Inter (sans-serif)
- Code: JetBrains Mono (monospace)

## Deployment

The site automatically deploys to GitHub Pages via GitHub Actions on push to `main` branch.

**GitHub Actions Workflow:** `.github/workflows/deploy.yml`

### Custom Domain Setup

1. GitHub Pages is configured to use custom domain: `dev.krough.org`
2. CNAME file in `public/` directory
3. DNS CNAME record points to `<username>.github.io`

## Project Structure

```
/
├── src/
│   ├── components/      # Reusable Astro components
│   ├── layouts/         # Page layouts
│   ├── pages/           # Site pages (file-based routing)
│   └── styles/          # Global CSS and Tailwind config
├── public/              # Static assets (favicon, CNAME, robots.txt)
├── astro.config.mjs     # Astro configuration
├── tailwind.config.mjs  # Tailwind CSS configuration
└── package.json         # Node dependencies
```

## Design System

The site uses a consistent design system with:
- Floating cards with subtle shadows
- Generous whitespace (renovated loft aesthetic)
- Elegant serif headlines with clean sans body text
- Burnt coral accent used sparingly for CTAs only

See `tmp/VISUAL-IDENTITY.md` for complete brand guidelines.

## Contributing

This is a personal website. For consulting inquiries, visit [Faberworks](https://faberworks.io) or use the contact information on the site.

## License

© 2024-2026 Chris Krough. All rights reserved.
