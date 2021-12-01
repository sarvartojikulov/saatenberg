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
      colors : {
        "products-IB": "#F2F2F2"
      },
      gridTemplateRows:{
        "wrapper-sm": "48px 1fr",
        "wrapper-md": "56px 1fr"
      },
      maxWidth:{
        "1440" : "1440px"
      }
    },
    zIndex: {
      "-10": "-10",
      "0": "0",
      "10": "10",
      "20": "20",
      "30": "30",
      "40": "40",
      "50": "50",
      "60": "60",
      "70": "70",
      "80": "80",
      "90": "90",
      "100": "100",
      "300": "300",
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
