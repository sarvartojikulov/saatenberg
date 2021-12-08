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
     backgroundColor: theme => ({

      ...theme('colors'),
      "button": "rgba(0, 0, 0, 0.25)",
     }),
    extend: {
      colors : {
        "products-IB": "#F2F2F2"
      },
      gridTemplateRows:{
        "wrapper-md": "56px 1fr"
      },
      maxWidth:{
        "md": "720px",
        "1440" : "1440px",
      },
      colors: {
        "conv": "#842854"
      },
      maxHeight: {
        "900" : "1080px"
      },
      height: {
        "544" : "544px"
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
