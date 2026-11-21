/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      // Colors come from CSS variables that are set per restaurant at runtime (see store/session.ts)
      colors: {
        primary: 'var(--c-primary)',
        secondary: 'var(--c-secondary)',
        accent: 'var(--c-accent)',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        urdu: ['"Noto Nastaliq Urdu"', 'serif'],
      },
    },
  },
  plugins: [],
}
