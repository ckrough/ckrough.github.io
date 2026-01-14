/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        // Brand colors from VISUAL-IDENTITY.md
        foundation: '#F5F0E8',    // Warm cream - backgrounds
        surface: '#FAFAF8',        // Warm white - cards
        shadow: '#2A2A28',         // Deep shadow - dark sections
        structure: '#3D3D3D',      // Charcoal - text, headers
        muted: '#6B6B6B',          // Muted gray - secondary text
        accent: '#E07A5F',         // Burnt coral - CTAs, highlights
        border: '#E5E5E5',         // Light gray - dividers
      },
      fontFamily: {
        heading: ['Playfair Display', 'Georgia', 'serif'],
        body: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      spacing: {
        'xs': '0.5rem',   // 8px
        'sm': '1rem',     // 16px
        'md': '1.5rem',   // 24px
        'lg': '2rem',     // 32px
        'xl': '3rem',     // 48px
        '2xl': '4rem',    // 64px
        '3xl': '6rem',    // 96px
      },
      fontSize: {
        'h1': ['3rem', { lineHeight: '1.2' }],      // 48px
        'h2': ['2.25rem', { lineHeight: '1.2' }],   // 36px
        'h3': ['1.5rem', { lineHeight: '1.3' }],    // 24px
        'h4': ['1.25rem', { lineHeight: '1.4' }],   // 20px
      },
      boxShadow: {
        'card': '0 2px 8px rgba(61, 61, 61, 0.08)',
        'card-hover': '0 4px 16px rgba(61, 61, 61, 0.12)',
      },
    },
  },
  plugins: [],
}
