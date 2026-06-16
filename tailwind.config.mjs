/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        navy: '#050B1B',
        brand: {
          DEFAULT: '#4B5E92',
          dark: '#3d4e7a',
        },
        'site-bg': '#EFF5FC',
        smoke: '#e4eaf4',
        'site-muted': '#5c6580',
        'site-text': '#0d1120',
      },
      fontFamily: {
        display: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        sans: ['"DM Sans"', 'system-ui', 'sans-serif'],
      },
      maxWidth: {
        site: '1180px',
      },
    },
  },
  plugins: [],
};
