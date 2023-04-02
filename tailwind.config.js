/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "black1": "#111",
        "black2": "#0a0a0a",
        "white1": "#e5e5e5",
        "dots": "#2e2e2e",
      }
    },
  },
  plugins: [],
}

