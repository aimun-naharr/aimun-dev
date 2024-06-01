/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'sans-medium': 'var(--font-medium)',
        'sans-bold': 'var(--font-bold)'
      },
      color: {
        'primary': 'var(--primary-color)',
        'primary-foreground': 'var(--primary-foreground-color)',
        'card-bg': 'var(--dark-card-bg)'
      }
    },
  },
  plugins: [],
}