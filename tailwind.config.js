const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
       colors: {
        primary: defaultTheme.colors.green
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
  content: [
    // `components/**/*.{vue,js}`,
    // `layouts/**/*.vue`,
    // `pages/**/*.vue`,
    // `composables/**/*.{js,ts}`,
    // `plugins/**/*.{js,ts}`,
    // `App.{js,ts,vue}`,
    // `app.{js,ts,vue}`
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
  ],
}
