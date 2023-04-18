/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      gridTemplateRows: {
        "auto_1": "auto 1fr"
      },
      gridTemplateColumns: {
        "auto_1_1": "auto 1fr 1fr",
        "auto_1": "auto 1fr",
      },
    },
  },
  plugins: [],
}