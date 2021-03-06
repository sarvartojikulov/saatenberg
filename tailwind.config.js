module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    backgroundColor: theme => ({

      ...theme('colors'),
      "productsIB": "#F2F2F2",
      "black": "#000000",
      "button": "rgba(0, 0, 0, 0.25)",
     }),
    
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
      gridTemplateRows:{
        "navbar": "56px 1fr 1fr",
        "body-wrapper": "56px 1fr 72px",
        "IB-md":"1fr 152px 1fr",
        '12': 'repeat(12, minmax(0, 1fr))',
        "contactBlockRows": "48px 48px 48px 48px 1fr 48px 48px"
      },
      maxWidth:{
        "md": "720px",
        "1440" : "1440px",
      },
      colors: {
        "conv": "#842854",
        "input-gray": "rgba(0, 0, 0, 0.25)"
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
