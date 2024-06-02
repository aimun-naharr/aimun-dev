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
      colors: {
        'primary': 'var(--primary-color)',
        'primary-foreground': 'var(--primary-foreground-color)',
        'card-bg': 'var(--dark-card-bg)'
      },
      animation: {
        scroll:
          "scroll var(--animation-duration, 40s) var(--animation-direction, forwards) linear infinite",
        "bounce-slow": "bounce 2s linear infinite",
      },
      keyframes: {
        scroll: {
          to: {
            transform: "translate(calc(-50% - 0.5rem))",
          },
        },
      },
    },
  },
  plugins: [],
}