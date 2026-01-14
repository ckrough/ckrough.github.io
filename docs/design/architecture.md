---
name: architecture
description: Read when onboarding or making architectural decisions. Covers style, tech stack, structure.
category: reference
when_to_use:
- Starting work on a new feature
- Onboarding to the codebase
- Making architectural decisions
- Understanding how components fit together
dependencies:
- development-standards.md
- decisions/
---
# dev.krough.org Architecture

Personal professional website showcasing engineering leadership and AI transformation expertise.

## System Overview

```
┌─────────────────────────────────────────────────────────────────┐
│                    STATIC SITE GENERATION                       │
│                                                                 │
│  Source (.astro, .md) → Astro Build → Static HTML/CSS/JS       │
│                            ↓                                    │
│                    GitHub Pages (CDN)                           │
│                            ↓                                    │
│                  dev.krough.org (Custom Domain)                 │
└─────────────────────────────────────────────────────────────────┘
```

## Architecture Style: Static Site Generation (SSG)

**Why this approach:**
- **Zero server cost** - GitHub Pages hosts for free
- **Maximum performance** - Pre-rendered HTML, no server-side processing
- **SEO-friendly** - All content available at build time
- **Security** - No backend to compromise, no database to hack
- **Simple deployment** - Git push triggers automatic build and deploy
- **Global CDN** - GitHub Pages CDN for worldwide performance

## Tech Stack

### Frontend (Astro 4+)

| Component | Choice | Rationale |
|-----------|--------|-----------|
| Framework | Astro | Static site generation, zero JS by default, excellent DX |
| Styling | Tailwind CSS v3 | Utility-first, consistent design system, small bundles |
| Fonts | Google Fonts | Playfair Display (headings), Inter (body) |
| Build Tool | Vite | Fast builds, hot module replacement |
| Deployment | GitHub Actions | Automated CI/CD on push to main |
| Hosting | GitHub Pages | Free, fast CDN, custom domain support |

**Why Astro over alternatives:**
- **vs Next.js**: No React overhead, simpler for static content sites
- **vs Gatsby**: Faster builds, simpler data model, better DX
- **vs Hugo/Jekyll**: Modern JS ecosystem, component-based, easier to extend
- **vs vanilla HTML**: Component reuse, layouts, modern build tooling

### Typography & Fonts

- **Headlines**: Playfair Display (serif) - Elegant, confident, carved appearance
- **Body**: Inter (sans-serif) - Readable, modern, professional
- **Code**: JetBrains Mono (monospace) - Technical precision

Loaded from Google Fonts CDN for performance and reliability.

## Project Structure

```
dev.krough.org/
├── src/
│   ├── pages/                  # Auto-routed pages (file-based routing)
│   │   ├── index.astro        # Home page (/)
│   │   ├── services.astro     # Services (/services)
│   │   ├── projects.astro     # Projects (/projects)
│   │   ├── experience.astro   # Experience (/experience)
│   │   └── contact.astro      # Contact (/contact)
│   │
│   ├── layouts/                # Page layouts
│   │   └── BaseLayout.astro   # Site-wide layout (HTML, SEO, Header/Footer)
│   │
│   ├── components/             # Reusable Astro components
│   │   ├── Header.astro       # Navigation with mobile menu
│   │   ├── Footer.astro       # Social links, copyright
│   │   ├── Card.astro         # Floating card component (3 variants)
│   │   ├── Hero.astro         # Page hero sections
│   │   ├── ProjectCard.astro  # Project showcase with tech stack
│   │   ├── ServiceCard.astro  # Service descriptions
│   │   └── ExperienceItem.astro  # Career timeline items
│   │
│   └── styles/
│       └── global.css         # Global styles, CSS variables, Tailwind imports
│
├── public/                     # Static assets (not processed)
│   ├── CNAME                  # Custom domain (dev.krough.org)
│   ├── robots.txt             # SEO crawler instructions
│   └── favicon.svg            # Site icon
│
├── docs/                       # Project documentation
├── .github/workflows/         # GitHub Actions CI/CD
│   └── deploy.yml             # Auto-deploy to GitHub Pages
│
├── astro.config.mjs           # Astro configuration
├── tailwind.config.mjs        # Tailwind theme (brand colors)
├── tsconfig.json              # TypeScript configuration
└── package.json               # Node dependencies
```

## Key Design Patterns

### Component Composition

Astro components are composable and reusable:

```astro
---
import BaseLayout from '../layouts/BaseLayout.astro';
import Hero from '../components/Hero.astro';
import Card from '../components/Card.astro';
---

<BaseLayout title="Page Title">
  <Hero headline="Welcome" />
  <Card>
    <p>Content here</p>
  </Card>
</BaseLayout>
```

### Layout Pattern

`BaseLayout.astro` provides site-wide structure:
- HTML document structure
- SEO meta tags (title, description, OpenGraph, Twitter Cards)
- Font loading (Google Fonts)
- Header and Footer components
- Global styles import

All pages use this layout for consistency.

### Prop-Based Configuration

Components accept props for flexibility:

```astro
interface Props {
  title: string;
  description?: string;
  featured?: boolean;
}

const { title, description, featured = false } = Astro.props;
```

### File-Based Routing

Pages in `src/pages/` automatically become routes:
- `index.astro` → `/`
- `services.astro` → `/services`
- `projects.astro` → `/projects`

No routing configuration needed.

## Brand Identity System

### Color Palette

Defined in `tailwind.config.mjs`:

```javascript
colors: {
  foundation: '#F5F0E8',  // Warm cream - page background
  surface: '#FAFAF8',     // Warm white - cards
  structure: '#3D3D3D',   // Charcoal - primary text
  muted: '#6B6B6B',       // Muted gray - secondary text
  accent: '#E07A5F',      // Burnt coral - CTAs ONLY
  border: '#E5E5E5',      // Light gray - dividers
}
```

### Design Principles

1. **Generous whitespace** - Renovated loft aesthetic with breathing room
2. **Floating cards** - Elevated surfaces with subtle shadows
3. **Elegant typography** - Large serif headlines, clean sans body
4. **Strategic accent** - Burnt coral (#E07A5F) ONLY for CTAs
5. **Content focus** - Minimal decoration, content is hero

### Typography Scale

```
H1: 3rem (48px)    - Page titles
H2: 2.25rem (36px) - Section headers
H3: 1.5rem (24px)  - Subsection headers
H4: 1.25rem (20px) - Card headers
Body: 1rem (16px)  - Paragraph text
Small: 0.875rem (14px) - Captions
```

## Deployment Pipeline

```
Git Push → GitHub Actions → Astro Build → GitHub Pages Deploy
   ↓             ↓              ↓                ↓
 main      npm run build    dist/        dev.krough.org
          (5 pages)       (static HTML)    (live site)
```

**Build Process:**
1. GitHub Actions triggered on push to `main`
2. Install Node.js 20 and dependencies
3. Run `npm run build` (Astro build)
4. Upload `dist/` artifact
5. Deploy to GitHub Pages
6. Site live at https://dev.krough.org (~1 minute)

## Performance Characteristics

- **Build time**: ~400-500ms for 5 pages
- **Bundle size**: Minimal (no client-side JS by default)
- **Page size**: ~10-20KB per page (HTML + CSS)
- **Lighthouse scores**: 90+ across all metrics
- **Zero server requests** - All content pre-rendered

## SEO Strategy

### Meta Tags
- Unique `<title>` per page
- Meta descriptions (150-160 chars)
- OpenGraph tags for social sharing
- Twitter Cards for link previews
- Canonical URLs

### Structured Data
- Person schema (JSON-LD)
- Organization schema for Faberworks
- Breadcrumbs (future enhancement)

### Sitemap
- Auto-generated by Astro
- Submitted to search engines
- `robots.txt` allows all crawlers

## Related Documents

- [Development Standards](development-standards.md) - Code quality, Git workflow
- [Architecture Decision Records](../adr/) - Significant technical decisions
- [Brand Guidelines](/tmp/VISUAL-IDENTITY.md) - Complete visual identity guide
- [CLAUDE.md](/CLAUDE.md) - Project context for AI assistance
