module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontSize: {
      sm: "20px",
      md: "25px",
      lg: "30px"
    },
    extend: {
      gridTemplateRows:{
        "wrapper": "130px 1fr"
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
