/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      gridTemplateColumns: {
        "1_2": "1fr 2fr",
        "auto_1": "auto 1fr",
      },
      colors: {
        "background-color": "#312e38",
        "info-color": "#3b3743",
        "info-border-color": "#45404F",
        "field-color": "#45404F",
        "field-border-color": "#4f495a",
        "text-color": "#F4F6F6",
        "text-color-placeholder": "#c0cccc",
        "active-color": "#098DEC",
        "active-color-hover": "#0882D9",
        "active-color-pressed": "#065E9D",
        "link-color": "#0776C5",
        "highlight-color": "#EEB044",
      }
    },
  },
  plugins: [],
}