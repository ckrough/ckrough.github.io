# Visual Identity Direction

*Last Updated: January 14, 2026*

This document establishes the visual identity direction for Chris Krough's professional brand and the Faberworks consulting practice.

---

## Core Narrative

**AI is the renovation of legacy systems—transforming old code into modern industry.**

Just as abandoned factories and fabrication plants are being reborn as modern creative spaces and tech hubs, AI breathes new life into legacy codebases. The rust becomes patina. The industrial becomes intentional. What was once obsolete infrastructure becomes the foundation for innovation.

This isn't demolition and replacement—it's thoughtful renovation. The bones are good. The craft of the original builders is respected. But the space is reimagined for how we work today.

---

## Design Philosophy

### Modern Industry / Reborn Code Aesthetic

The visual identity draws from **renovated industrial spaces**: exposed concrete, weathered metal, natural light filtering through factory windows, and the intentional contrast between raw materials and modern interventions. Think: a polished conference table in a brick warehouse. A MacBook on a reclaimed wood desk. Code running on screens surrounded by steel beams.

**Primary Inspiration:** Sophisticated, muted, textured concrete backgrounds with subtle shadow play, elegant typography, and strategic use of a warm accent color.

**Core Concept:** Industrial refinement. The intersection of historic craftsmanship and modern innovation. Serious work happens here, but beautifully.

**Key Characteristics:**
- **Material authenticity**: Concrete textures, aged surfaces, natural shadows—not decoration, but environment
- **Restrained palette**: Quiet foundations with one punchy accent color used sparingly
- **Typographic confidence**: Large-scale, unhurried headlines that command attention without effects
- **Product as hero**: Interfaces and work showcased with pride, in environmental context
- **Intellectual warmth**: Sophisticated without being cold, premium without being pretentious

### The Industrial/Code Parallel

| Industrial Element | Code/AI Parallel |
|--------------------|------------------|
| Factory renovation | Legacy system modernization |
| Exposed brick/beams | Visible, honest architecture |
| Patina and age | Proven, battle-tested foundations |
| Modern interventions | AI-powered enhancements |
| Adaptive reuse | Code transformation, not replacement |
| Craft preservation | Respecting original developer intent |
| Natural light | Clarity, transparency, understanding |
| Steel and concrete | Robust, reliable infrastructure |

**Why This Fits Faberworks:**

| Element | Industrial Revitalization | Faberworks Connection |
|---------|---------------------------|----------------------|
| Origin | Factories where things were *made* | Faber = "maker/craftsman" |
| Transformation | Old → new, preserved → functional | Legacy systems → AI-enabled |
| Character | Substance, history, authenticity | "Substance over flash" |
| Materials | Concrete, steel, copper patina | Brand color palette |
| Vibe | Serious work happens here | Pragmatic innovation |

---

## Color Palette

### Primary Palette

**Foundation — Warm Cream/Beige**
- Hex: #F5F0E8
- RGB: 245, 240, 232
- Usage: Primary backgrounds, page canvas
- Feeling: Aged paper, sandblasted concrete, natural canvas

**Structure — Charcoal/Slate Gray**
- Hex: #3D3D3D
- RGB: 61, 61, 61
- Usage: Primary text, headers, structural elements
- Feeling: Wrought iron, steel beams, industrial machinery
- Reference: Depth and weight of industrial materials

**Accent — Burnt Coral/Terracotta**
- Hex: #E07A5F
- RGB: 224, 122, 95
- Usage: CTAs, highlights, key emphasis points (used sparingly)
- Feeling: Rust patina, kiln-fired brick, copper oxidation

### Supporting Colors

**Warm White**
- Hex: #FAFAF8
- RGB: 250, 250, 248
- Usage: Cards, elevated surfaces, content containers
- Feeling: Factory skylights, whitewashed walls

**Deep Shadow**
- Hex: #2A2A28
- RGB: 42, 42, 40
- Usage: Dark mode backgrounds, footer, deep contrast
- Feeling: Cast shadows, aged steel, foundry darkness

**Muted Text**
- Hex: #6B6B6B
- RGB: 107, 107, 107
- Usage: Secondary text, captions, metadata
- Feeling: Weathered concrete, industrial patina

### Palette Philosophy

The palette avoids pure black (#000000) and pure white (#FFFFFF)—everything has warmth, texture, and age. Colors feel like they've been there for decades, weathered into permanence.

The accent color (Burnt Coral #E07A5F) works because everything else is quiet. Use it for:
- Primary CTAs only
- Key data points or metrics
- Important links or highlights
- Never more than 5-10% of any given view

### Colors to Avoid

- Pure white (#FFFFFF) — too clinical, no warmth
- Pure black (#000000) — too harsh, lacks industrial character
- Cool grays — too sterile, lacks industrial warmth
- Bright/neon colors — too trendy, breaks aesthetic
- Multiple accent colors — dilutes impact

### Color Application

| Element | Color | Hex |
|---------|-------|-----|
| Page background | Warm Cream | #F5F0E8 |
| Card/container background | Warm White | #FAFAF8 |
| Primary text | Charcoal | #3D3D3D |
| Secondary text | Muted | #6B6B6B |
| Headers | Charcoal | #3D3D3D |
| Links (default) | Charcoal | #3D3D3D |
| Links (hover) | Burnt Coral | #E07A5F |
| Primary CTA | Burnt Coral | #E07A5F |
| CTA text | Warm White | #FAFAF8 |
| Borders/dividers | Light gray | #E5E5E5 |
| Dark sections | Deep Shadow | #2A2A28 |

### CSS Variables

```css
:root {
  /* Primary Palette */
  --color-foundation: #F5F0E8;     /* Warm cream - backgrounds */
  --color-structure: #3D3D3D;       /* Charcoal - text, headers */
  --color-accent: #E07A5F;          /* Burnt coral - CTAs, highlights */

  /* Supporting */
  --color-surface: #FAFAF8;         /* Warm white - cards */
  --color-shadow: #2A2A28;          /* Deep shadow - dark mode */
  --color-muted: #6B6B6B;           /* Muted gray - secondary text */
  --color-border: #E5E5E5;          /* Light gray - dividers */

  /* Semantic Aliases */
  --color-background: var(--color-foundation);
  --color-text: var(--color-structure);
  --color-text-secondary: var(--color-muted);
  --color-primary: var(--color-accent);
  --color-card: var(--color-surface);
}
```

---

## Typography

### Direction

Typography should feel carved rather than typed—the confidence of text etched into a building's cornerstone or cast in bronze. Large scale, unhurried, commanding attention without shouting.

**Key Principles:**
- **Bold but not aggressive** — confident headlines with softer supporting elements
- **Generous spacing** — letter-spacing in headlines, breathing room throughout
- **Contrast between heading and body** — ornate/elegant headlines with functional body text mirrors the industrial/modern duality

### Recommended Font Families

**Headlines: Refined Serif or Elegant Sans**
- Primary: **Playfair Display** — elegant serif with character
- Alternative: **DM Serif Display** — clean, modern serif
- Sans option: **Inter** (medium/semibold weights) — when serif feels too formal
- Feeling: Something that could be etched into stone, cast in bronze

**Body: Clean, Readable Sans-Serif**
- Primary: **Inter** — highly readable, modern, professional
- Alternative: **Source Sans Pro** — slightly warmer
- Feeling: Functional, modern contrast to elegant headlines

**Code/Technical: Monospace**
- Primary: **JetBrains Mono** — excellent readability
- Alternative: **Fira Code** — with ligatures
- Feeling: Technical precision, code craftsmanship

### Typography Scale

```
H1: 3rem / 48px    — Page titles (serif, bold)
H2: 2.25rem / 36px — Section headers (serif)
H3: 1.5rem / 24px  — Subsection headers (sans, semibold)
H4: 1.25rem / 20px — Card headers (sans, medium)
Body: 1rem / 16px  — Paragraph text (sans, regular)
Small: 0.875rem / 14px — Captions, metadata
```

### CSS Font Stack

```css
:root {
  --font-heading: 'Playfair Display', 'DM Serif Display', Georgia, serif;
  --font-body: 'Inter', 'Source Sans Pro', system-ui, sans-serif;
  --font-mono: 'JetBrains Mono', 'Fira Code', monospace;

  /* Typography settings */
  --line-height-tight: 1.2;
  --line-height-normal: 1.6;
  --letter-spacing-tight: -0.02em;
  --letter-spacing-wide: 0.05em;
}
```

### Typography Guidelines

- **Headlines**: Generous letter-spacing, tight line-height (1.2), confident scale
- **Body text**: Line height 1.6, max-width 65-75 characters for readability
- **Section labels**: Consider uppercase with wide letter-spacing (e.g., "ABOUT US", "SERVICES")
- **Accent text**: Use accent color sparingly for key phrases, never full sentences

---

## Texture & Material Language

### Background Treatment

Backgrounds should feel like environments, not decorations:

- **Concrete/stone textures** — subtle, not overwhelming
- **Natural shadow play** — suggests depth and dimension (like light through factory windows)
- **Subtle grain and noise** — evokes aged surfaces
- **Gradient shadows** — atmospheric depth rather than flat backgrounds

### Implementation

- Use subtle CSS noise/grain overlays
- Consider photographic textures at very low opacity (5-15%)
- Shadow gradients suggesting natural light direction
- Avoid: obvious texture tiles, heavy patterns, distracting backgrounds

### Material Photography Direction

When using photographic elements:
- Product UI showcased in environmental context (devices on concrete surfaces)
- Abstract architectural photography: steel beams, exposed brick, factory windows
- Macro textures: metal patina, concrete grain, weathered wood
- Warm, atmospheric lighting with depth

**Avoid:**
- Generic stock photography
- Overly polished/sterile imagery
- Pure digital abstractions without material grounding

---

## Layout Philosophy

### Key Patterns

1. **Asymmetric balance** — compositions that feel intentional but not rigid
2. **Generous whitespace** — the luxury of empty space, like a renovated loft with 20-foot ceilings
3. **Floating elements** — cards and content blocks that cast subtle shadows, suggesting objects in space
4. **Grid with personality** — underlying structure that occasionally breaks for visual interest
5. **Hero moments** — large, confident statements that anchor each section

### Card-Based Architecture

Content organized into elevated containers:
- Subtle shadows suggesting physical presence
- Warm white (#FAFAF8) surfaces on cream (#F5F0E8) backgrounds
- Generous internal padding
- Clear visual hierarchy within cards

### Spacing Scale

```css
:root {
  --space-xs: 0.5rem;   /* 8px */
  --space-sm: 1rem;     /* 16px */
  --space-md: 1.5rem;   /* 24px */
  --space-lg: 2rem;     /* 32px */
  --space-xl: 3rem;     /* 48px */
  --space-2xl: 4rem;    /* 64px */
  --space-3xl: 6rem;    /* 96px */
}
```

---

## Motion & Interaction

For digital applications, motion should feel:

- **Weighty and intentional** — things move with mass
- **Unhurried** — confident, not frantic
- **Mechanical inspiration** — sliding, rotating, lifting (like industrial machinery)

### Interaction States

| State | Treatment |
|-------|-----------|
| Hover (links) | Color shift to accent (#E07A5F) |
| Hover (cards) | Subtle lift with enhanced shadow |
| Active/pressed | Slight scale reduction (0.98) |
| Focus | Accent color outline |
| Transitions | 200-300ms ease-out |

---

## Brand Voice Alignment

The visual identity supports a voice that is:

- **Confident but not arrogant** — we've done this before, we know the craft
- **Warm but not casual** — professional respect, human connection
- **Technical but accessible** — we speak code, but we translate for everyone
- **Forward-looking but grounded** — innovation built on solid foundations

---

## Brand Applications

### Faberworks Website (faberworks.io)

**Visual Approach:**
- Cream (#F5F0E8) page background with subtle texture
- Floating white (#FAFAF8) content cards
- Charcoal (#3D3D3D) typography
- Burnt Coral (#E07A5F) CTAs and key highlights only
- Elegant serif headlines, clean sans body text
- Product/service imagery in environmental context

**Hero Section:**
- Large, confident headline (serif)
- Brief value proposition
- Single coral CTA
- Subtle textured background or abstract industrial imagery

**Feel:** "A serious workshop where valuable things are built—renovated for the modern era"

### Personal Website (dev.krough.org)

**Approach:**
- Same palette, slightly more minimal execution
- Focus on content and projects over atmosphere
- Portfolio showcase with clean presentation
- Connect visually to Faberworks identity

**Feel:** Professional portfolio that shares DNA with Faberworks

### LinkedIn

**Banner Image:**
- Textured background (concrete, subtle industrial)
- Could incorporate typography or tagline
- Warm, sophisticated, distinctive
- Colors: Cream/charcoal base with coral accent if used

**Profile Photo:**
- Professional headshot
- Warm lighting, approachable
- Could have subtly warm/industrial toned background

### Logo Direction

**Primary Concept:** F/W Monogram
- Simple, memorable mark
- Works in single color
- Industrial/structural feeling
- Could incorporate overlapping or interlocking forms

**Color Application:**
- Primary: Charcoal (#3D3D3D) on light backgrounds
- Accent version: Burnt Coral (#E07A5F) for select applications
- Reverse: Warm White (#FAFAF8) on dark backgrounds

---

## Quick Reference

### Brand Colors (AI Prompt-Ready)

When building for Faberworks, use these exact colors:

```
BACKGROUNDS
- Page background: #F5F0E8 (warm cream)
- Card/surface: #FAFAF8 (warm white)
- Dark sections: #2A2A28 (deep shadow)

TEXT
- Primary text: #3D3D3D (charcoal)
- Secondary text: #6B6B6B (muted gray)
- Text on dark: #FAFAF8 (warm white)

ACCENT (use sparingly)
- Primary CTA: #E07A5F (burnt coral)
- Hover states: #E07A5F (burnt coral)
- Key highlights: #E07A5F (burnt coral)

BORDERS
- Dividers: #E5E5E5 (light gray)
```

### Font Stack (AI Prompt-Ready)

```
HEADINGS: 'Playfair Display' or 'DM Serif Display', Georgia, serif
BODY: 'Inter' or 'Source Sans Pro', system-ui, sans-serif
CODE: 'JetBrains Mono', monospace
```

### Design Keywords

When prompting AI for design work, use these terms:
- "Modern industrial aesthetic"
- "Renovated factory feel"
- "Concrete and patina textures"
- "Warm, muted palette with coral accent"
- "Elegant serif headlines"
- "Floating cards with subtle shadows"
- "Generous whitespace"
- "Premium but approachable"

---

## Do's and Don'ts

### Do:
- Use the warm cream background as your canvas
- Let charcoal typography carry the design
- Reserve burnt coral for CTAs and key moments only
- Embrace subtle texture and shadow for depth
- Maintain generous whitespace
- Use elegant serif for headlines, clean sans for body
- Create floating card layouts with subtle elevation

### Don't:
- Use pure white or pure black
- Scatter accent color throughout—it loses impact
- Go cold, sterile, or corporate
- Overuse textures or make them distracting
- Clutter layouts—embrace the high ceilings
- Mix too many typefaces
- Forget the warmth—industrial without humanity

---

## Reference & Inspiration

**Inspiration:**
- Optikka by Zajno (Dribbble) —https://dribbble.com/shots/26057663-Landing-Page-for-an-AI-Powered-Design-System

**Supporting References:**
- Briefly AI (Wavespace) — clean product showcase
- Arctonic architecture site — bold typography, confident scale
- Marketeam (Nixtio) — sophisticated gradients and depth

**Mood Board Concepts:**
- Renovated mill restaurants and breweries
- Industrial loft creative offices
- Exposed concrete and steel beam interiors
- Copper fixtures with patina
- Natural light through factory windows
- Modern furniture in heritage spaces

---

*This visual identity direction should guide all Faberworks brand applications. The "Modern Industry / Reborn Code" aesthetic connects the brand name (craftsman/maker) with a visual language that communicates substance, heritage, and purposeful transformation—just as AI renovates legacy systems for the modern era.*
