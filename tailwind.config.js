module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      gridTemplateRows:{
        "wrapper": "100px 1fr"
      },
      maxWidth:{
        "1440" : "1440px"
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
