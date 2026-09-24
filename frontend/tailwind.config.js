/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cyber: {
          dark: '#0f172a',
          panel: '#1e293b',
          accent: '#38bdf8',
          alert: '#ef4444'
        }
      }
    },
  },
  plugins: [],
}
