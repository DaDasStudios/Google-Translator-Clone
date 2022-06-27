/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme")
module.exports = {
  content: ["./GoogleTranslator/src/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ['PT Sans',
        ...defaultTheme.fontFamily.sans
      ]}
    },
  },
  plugins: [],
}
