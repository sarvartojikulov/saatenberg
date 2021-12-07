module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontSize: {
      "xsm": "15px",
      "sm": "20px",
      "md": "25px",
      "lg": "30px"
    },
    minHeight: {
      '0': '0',
      '1/4': '25%',
      '1/2': '50%',
      '3/4': '75%',
      "4/5": "85%",
      'full': '100%',
     },
    extend: {
      colors : {
        "products-IB": "#F2F2F2"
      },
      gridTemplateRows:{
        "wrapper-sm": "48px 1fr",
        "wrapper-md": "56px 1fr",
        '12': 'repeat(12, minmax(0, 1fr))',
      },
      maxWidth:{
        "1440" : "1440px"
      },
      maxHeight: {
        "900" : "900px"
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
