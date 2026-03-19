/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        // Brand colors — dark theme (Chris Krough)
        foundation: '#2F455B',    // Slate - page background
        'foundation-deep': '#243848', // Darker slate - footer, alternating sections
        surface: '#50636F',        // Gray - card backgrounds
        'surface-light': '#5A7080', // Lighter surface - hover states
        shadow: '#50636F',         // Gray - dark sections
        structure: '#F5F0E8',      // Cream - primary text, headers
        muted: '#D4DCE1',          // Cool blue-gray - secondary text (7.14:1 on foundation, 4.56:1 on surface)
        accent: '#E07A5F',         // Burnt coral - CTAs, highlights
        'accent-deep': '#A35945', // Deep coral - WCAG AA CTA background
        border: '#637A88',         // Visible gray - dividers (differs from surface)
      },
      fontFamily: {
        heading: ['Inter', 'system-ui', 'sans-serif'],
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
        'h1': ['clamp(2rem, 1.5rem + 2.5vw, 3rem)', { lineHeight: '1.2' }],
        'h2': ['clamp(1.75rem, 1.375rem + 1.875vw, 2.25rem)', { lineHeight: '1.2' }],
        'h3': ['clamp(1.25rem, 1.125rem + 0.625vw, 1.5rem)', { lineHeight: '1.3' }],
        'h4': ['clamp(1.125rem, 1.0625rem + 0.3125vw, 1.25rem)', { lineHeight: '1.4' }],
      },
      boxShadow: {
        'card': '0 2px 12px rgba(0,0,0,0.3), 0 1px 3px rgba(0,0,0,0.2)',
        'card-hover': '0 8px 24px rgba(0,0,0,0.4), 0 2px 6px rgba(0,0,0,0.3)',
        'card-elevated': '0 4px 16px rgba(0,0,0,0.35), 0 2px 4px rgba(0,0,0,0.25)',
      },
      maxWidth: {
        '5xl': '64rem',
      },
    },
  },
  plugins: [],
}
