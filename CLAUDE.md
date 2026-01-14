# dev.krough.org

Personal professional website for Chris Krough - Engineering Leader specializing in Platform Architecture and AI Transformation.

## Tech Stack

- **Framework:** Astro 4+ (static site generation)
- **Styling:** Tailwind CSS v3
- **Fonts:** Google Fonts (Playfair Display, Inter)
- **Hosting:** GitHub Pages with custom domain (dev.krough.org)

## Project Structure

```
/
├── src/
│   ├── components/      # Reusable Astro components (Header, Footer, Card, Hero, etc.)
│   ├── layouts/         # Page layouts (BaseLayout.astro)
│   ├── pages/           # Site pages - file-based routing
│   │   ├── index.astro
│   │   ├── services.astro
│   │   ├── projects.astro
│   │   ├── experience.astro
│   │   └── contact.astro
│   └── styles/
│       └── global.css   # Global styles, CSS variables, Tailwind imports
├── public/              # Static assets (not processed)
│   ├── CNAME           # Custom domain configuration
│   ├── robots.txt
│   └── favicon.svg
├── astro.config.mjs     # Astro configuration (site URL, integrations)
├── tailwind.config.mjs  # Tailwind theme (brand colors, typography, spacing)
└── package.json
```

## Build/Development Commands

```bash
npm run dev              # Start development server (localhost:4321)
npm run build            # Build for production (outputs to dist/)
npm run preview          # Preview production build locally
npm run astro            # Run Astro CLI commands
```

## Brand Identity

**Theme:** "Modern Industry / Reborn Code" - renovated industrial aesthetic

**Color Palette:**
- Background: `#F5F0E8` (warm cream) - `bg-foundation`
- Card surface: `#FAFAF8` (warm white) - `bg-surface`
- Primary text: `#3D3D3D` (charcoal) - `text-structure`
- Secondary text: `#6B6B6B` (muted gray) - `text-muted`
- Accent: `#E07A5F` (burnt coral) - `text-accent` / `bg-accent` - **CTAs ONLY**
- Border: `#E5E5E5` (light gray) - `border-border`

**Typography:**
- Headlines: `font-heading` - Playfair Display (serif)
- Body: `font-body` - Inter (sans-serif)
- Code: `font-mono` - JetBrains Mono

**Spacing Scale:**
- `xs` / `sm` / `md` / `lg` / `xl` / `2xl` / `3xl` (0.5rem to 6rem)

## Design Principles

1. **Generous whitespace** - Renovated loft aesthetic with breathing room
2. **Floating cards** - Elevated surfaces with subtle shadows (`shadow-card`)
3. **Elegant typography** - Large serif headlines, clean sans body text
4. **Strategic accent** - Burnt coral (#E07A5F) ONLY for CTAs and key highlights
5. **Content focus** - Minimal decoration, content is the hero

## Component Conventions

### Layouts
- `BaseLayout.astro` - Site-wide layout with SEO meta tags, fonts, Header/Footer
  - Props: `title`, `description`, `ogImage`

### Reusable Components
- `Header.astro` - Navigation with responsive mobile menu
- `Footer.astro` - Social links, copyright
- `Card.astro` - Base card component with variants (`default`, `elevated`, `bordered`)
- `Hero.astro` - Page hero sections with headline, subheadline, optional CTA
- `ProjectCard.astro` - Project showcase with tech stack, GitHub link, featured flag
- `ServiceCard.astro` - Service descriptions with bullet lists
- `ExperienceItem.astro` - Career highlights with company, role, dates, outcomes

### Component Props Pattern
```astro
interface Props {
  title: string;
  description?: string;
  class?: string;
}
```

## Content Guidelines

**Voice:** Confident, direct, understated. Peer-to-peer with senior technical leaders.

**Writing principles:**
- Lead with outcomes and specific metrics
- Show strategic thinking, not just execution
- Let accomplishments speak for themselves
- Be concise, no buzzwords or jargon
- Example: "I've led platform engineering through 4 acquisitions and 2 IPOs. Now I help organizations figure out where AI actually works—and build it when it does."

## Deployment

**GitHub Actions:** `.github/workflows/deploy.yml`
- Builds on push to `main` branch
- Deploys to GitHub Pages automatically
- Uses official Astro deployment action

**Custom Domain Setup:**
1. `public/CNAME` contains `dev.krough.org`
2. GitHub Pages configured with custom domain
3. DNS CNAME: `dev.krough.org` → `<username>.github.io`

## Making Changes

### Adding a New Page
1. Create `.astro` file in `src/pages/` (e.g., `about.astro`)
2. Use `BaseLayout` component for consistent structure
3. Add navigation link in `Header.astro`
4. File-based routing: `src/pages/about.astro` → `/about`

### Modifying Styles
- Global styles: `src/styles/global.css`
- Tailwind config: `tailwind.config.mjs` (colors, typography, spacing)
- Component styles: Use Tailwind utility classes in components

### Brand Color Changes
Update `tailwind.config.mjs` theme.extend.colors and `src/styles/global.css` CSS variables.

## Architecture Principles

1. **Static Generation** - All pages pre-rendered at build time for performance
2. **Zero JavaScript** - No client-side JS by default (Astro islands pattern if needed)
3. **Component Composition** - Small, focused components composed into pages
4. **Brand Consistency** - Tailwind theme enforces design system
5. **SEO First** - Meta tags, OpenGraph, structured data, sitemap

## Reference Files

- `/tmp/VISUAL-IDENTITY.md` - Complete brand guidelines and design system
- `.claude/plans/woolly-scribbling-moore.md` - Implementation plan and decisions

## Future Enhancements (Not Yet Implemented)

- Blog section with Astro Content Collections
- Resume PDF generation
- Case studies for projects
- Testimonials section
- Dark mode toggle
- Analytics integration
- Newsletter signup
