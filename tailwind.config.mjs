/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        // Brand colors — dark theme (Chris Krough)
        foundation: '#2F455B',    // Slate - page background
        surface: '#3D5469',        // Slightly lighter slate - cards
        shadow: '#50636F',         // Gray - dark sections
        structure: '#F5F0E8',      // Cream - primary text, headers
        muted: '#8FA8B4',          // Light gray-blue - secondary text
        accent: '#E07A5F',         // Burnt coral - CTAs, highlights
        border: '#50636F',         // Gray - dividers
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
        'h1': ['3rem', { lineHeight: '1.2' }],      // 48px
        'h2': ['2.25rem', { lineHeight: '1.2' }],   // 36px
        'h3': ['1.5rem', { lineHeight: '1.3' }],    // 24px
        'h4': ['1.25rem', { lineHeight: '1.4' }],   // 20px
      },
      boxShadow: {
        'card': '0 2px 8px rgba(0, 0, 0, 0.25)',
        'card-hover': '0 4px 16px rgba(0, 0, 0, 0.35)',
      },
    },
  },
  plugins: [],
}
