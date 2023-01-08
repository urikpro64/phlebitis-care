/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: ['./src/**/*.{html,tsx}'],
  theme: {
    extend: {
      colors: {
        'primary': 'rgb(38 85 171)',
        'secondary': 'rgb(132 187 247)',
      },
      fontFamily: {
        sans: ['Kanit', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
}
