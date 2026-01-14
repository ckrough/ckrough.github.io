---
name: development-standards
description: Read when contributing code or reviewing PRs. Covers quality standards, git workflow, testing.
category: process
when_to_use:
- Setting up a new project
- Onboarding new contributors
- Establishing team conventions
- Reviewing code quality requirements
dependencies:
- architecture.md
---
# Development Standards

Standards for dev.krough.org development.

## Git Workflow: GitHub Flow

```
main (protected) ← feature branches via PR
```

### Process

1. Create feature branch from `main`
2. Make changes, commit with conventional messages
3. Open PR, get review
4. CI passes (build succeeds)
5. Merge to main (triggers auto-deploy)
6. Delete feature branch

### Branch Naming

```
feature/add-projects-page
fix/navigation-mobile-menu
docs/update-architecture
refactor/simplify-card-component
content/update-experience
chore/update-dependencies
```

### Commit Messages (Conventional Commits)

```
feat: add projects page with GitHub links
fix: resolve mobile navigation overflow
docs: add architecture documentation
content: update experience with Faberworks details
refactor: extract card component variants
chore: update Astro to 4.2.0
```

**Format:** `<type>: <description>` (lowercase, imperative mood, no period)

**Types:**
- `feat:` - New feature (page, component, functionality)
- `fix:` - Bug fix
- `docs:` - Documentation changes
- `content:` - Content updates (copy, images, data)
- `refactor:` - Code refactoring (no functional changes)
- `style:` - Formatting, CSS tweaks (no logic changes)
- `chore:` - Dependencies, configuration, tooling

## Code Quality

### Build Verification

```bash
# Build site (must pass before merge)
npm run build

# Preview production build locally
npm run preview

# Development server
npm run dev
```

**CI enforces:**
- Build succeeds (`npm run build`)
- No TypeScript errors
- All 5 pages generate successfully

### Manual Checks (Before PR)

- [ ] All pages load without errors
- [ ] Navigation works between all pages
- [ ] Mobile menu functions correctly
- [ ] Brand colors match specifications (#F5F0E8, #E07A5F, etc.)
- [ ] Fonts load correctly (Playfair Display, Inter)
- [ ] Card shadows render properly
- [ ] Responsive design works (mobile, tablet, desktop)
- [ ] Links work (internal navigation, external links)

## Component Standards

### Astro Component Structure

```astro
---
// Props interface (TypeScript)
interface Props {
  title: string;
  description?: string;
  class?: string;
}

// Props destructuring with defaults
const { title, description, class: className = '' } = Astro.props;
---

<!-- Template -->
<div class={`base-classes ${className}`}>
  <h2>{title}</h2>
  {description && <p>{description}</p>}
  <slot />
</div>
```

### Required Patterns

1. **Props interface** - Always define TypeScript interface for props
2. **Default values** - Provide sensible defaults for optional props
3. **Class composition** - Accept optional `class` prop for customization
4. **Slots** - Use `<slot />` for flexible content composition

### Component Naming

- PascalCase for component files: `Card.astro`, `ProjectCard.astro`
- Use descriptive names: `ServiceCard` not `SCard`
- Suffix with `.astro` extension

## Styling Standards

### Tailwind Utilities

**Prefer:** Tailwind utility classes
```astro
<div class="bg-surface rounded-lg shadow-card p-6">
```

**Avoid:** Inline styles or one-off CSS classes
```astro
<!-- Don't do this -->
<div style="background: #FAFAF8; padding: 1.5rem;">
```

### Brand Color Usage

**Always use Tailwind color classes:**
```
bg-foundation     # Page background (#F5F0E8)
bg-surface        # Card background (#FAFAF8)
text-structure    # Primary text (#3D3D3D)
text-muted        # Secondary text (#6B6B6B)
text-accent       # CTAs only (#E07A5F)
bg-accent         # CTA backgrounds
border-border     # Dividers (#E5E5E5)
```

**Never use hex colors directly in components** - use Tailwind classes to maintain consistency.

### Typography

```
font-heading      # Playfair Display (serif) - headlines
font-body         # Inter (sans-serif) - body text
font-mono         # JetBrains Mono - code

text-h1           # 3rem (48px) - page titles
text-h2           # 2.25rem (36px) - section headers
text-h3           # 1.5rem (24px) - subsection headers
text-h4           # 1.25rem (20px) - card headers
```

### Responsive Design

Use Tailwind responsive prefixes:
```astro
<div class="text-base md:text-lg lg:text-xl">
  <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
```

Breakpoints:
- `md:` - 768px (tablet)
- `lg:` - 1024px (desktop)

## Content Guidelines

### Brand Voice

**Tone:** Confident, direct, understated. Peer-to-peer with senior technical leaders.

**Principles:**
- Lead with outcomes and specific metrics
- Show strategic thinking, not just execution
- Let accomplishments speak for themselves
- Be concise, no buzzwords or jargon

**Examples:**
- ✅ "Led platform engineering through 4 acquisitions and 2 IPOs"
- ❌ "Experienced engineer with strong leadership skills"

- ✅ "6,700% revenue growth"
- ❌ "Significant revenue increase"

### Writing Style

- **Active voice**: "Built team through 3 acquisitions" not "Team was built"
- **Specific metrics**: "$3B" not "billions"
- **Concise**: One clear sentence better than three vague ones
- **No jargon**: "AI transformation" not "AI-driven digital transformation initiatives"

### Page Titles & Meta

**Format:** `[Page] - Chris Krough` or `Chris Krough - [Tagline]`

Examples:
- `Chris Krough - Engineering Leader | Platform Architecture | AI Transformation`
- `Services - Chris Krough`
- `Projects - Chris Krough`

**Meta descriptions:** 150-160 characters, include key metrics or value prop

## SEO Standards

### Meta Tags (Required)

Every page must have:
```astro
<BaseLayout
  title="Page Title - Chris Krough"
  description="150-160 char description with key metrics or value"
>
```

### Image Alt Text

All images require descriptive alt text:
```astro
<img src="/logo.svg" alt="Chris Krough logo" />
```

### Semantic HTML

Use semantic elements:
- `<nav>` for navigation
- `<main>` for primary content
- `<section>` for page sections
- `<article>` for self-contained content
- `<header>` and `<footer>` for page structure

## PR Requirements

### Before Opening PR

- [ ] Build succeeds (`npm run build`)
- [ ] All pages render correctly
- [ ] Mobile responsive (test in browser dev tools)
- [ ] Navigation works between pages
- [ ] Brand colors correct
- [ ] Content proofread (no typos)
- [ ] Links tested (internal and external)
- [ ] Documentation updated if needed

### PR Template

```markdown
## Summary
Brief description of changes (1-2 sentences).

## Type
- [ ] New feature (page, component)
- [ ] Bug fix
- [ ] Content update
- [ ] Refactor
- [ ] Documentation
- [ ] Configuration/dependencies

## Changes
- Added/Modified: List key files
- Reason: Why these changes were made

## Testing
- [ ] Build succeeds
- [ ] All pages load
- [ ] Mobile responsive
- [ ] Links work

## Screenshots
[If visual changes, include before/after screenshots]
```

### Review Process

- 1 approval required for content/copy changes
- CI must pass (build succeeds)
- Merge triggers automatic deploy to dev.krough.org

## Dependencies

### Adding New Dependencies

1. **Question need** - Can this be done without a dependency?
2. **Research** - Check npm weekly downloads, maintenance status, security
3. **Ask first** - For anything beyond Astro core ecosystem

### Pre-Approved Dependencies

| Category | Libraries |
|----------|-----------|
| Framework | astro, @astrojs/tailwind |
| Styling | tailwindcss, @tailwindcss/* |
| Build | vite, typescript |
| Icons | lucide (if needed), @astrojs/icons |

### Avoid Adding

- CSS frameworks beyond Tailwind (Bootstrap, Foundation, etc.)
- UI component libraries (MUI, Chakra, etc.) - build custom
- JavaScript frameworks (React, Vue, Svelte) - defeats Astro purpose
- Analytics/tracking (until explicitly requested)
- Client-side JS libraries (unless absolutely necessary)

## Deployment

### Automatic Deployment

- Push to `main` → GitHub Actions builds → Deploys to dev.krough.org
- Build time: ~30-60 seconds
- Deploy time: ~30 seconds
- Total: ~1-2 minutes from push to live

### Manual Verification Post-Deploy

After merge, verify:
- [ ] Site loads at https://dev.krough.org
- [ ] HTTPS working (no certificate errors)
- [ ] All pages accessible
- [ ] Navigation works
- [ ] Mobile responsive on real device
- [ ] No console errors (browser dev tools)

## Related Documents

- [Architecture](architecture.md) - Tech stack, structure, patterns
- [ADRs](../adr/) - Architectural decisions
- [Brand Guidelines](/tmp/VISUAL-IDENTITY.md) - Visual identity, colors, typography
- [CLAUDE.md](/CLAUDE.md) - Project context for AI assistance
