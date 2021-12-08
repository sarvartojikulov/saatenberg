module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontSize: {
      "sm": "20px",
      "md": "25px",
      "lg": "30px"
    },
    extend: {
      gridTemplateRows:{
        "wrapper-md": "56px 1fr"
      },
      maxWidth:{
        "md": "720px",
        "1440" : "1440px",
      },
      colors: {
        "conv": "#842854"
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
