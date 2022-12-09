/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      primary: '#0B1120',
      secondary: '#3ABAB4'
    },
  },
  plugins: [],
}
