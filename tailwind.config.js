module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    fontFamily: {
      fuggles: ['IM Fell Double Pica']
    },
    boxShadow: {
      'custom-light': ' 0 0 10px #313131',
      'custom-dark': '5px 5px 10px #0a0c0e, -5px -5px 10px #14161c'
    },
    extend: {
      colors: {
        green: {
          DEFAULT: '#00f260'
        },
        orange: {
          DEFAULT: '#FF5910'
        },
        blue: {
          DEFAULT: '#002D72'
        },
        dark: {
          DEFAULT: '#010101',
          100: '#0a0b1e',
          200: '#16181d',
          300: '#16181d',
          500: '#0f1115',
          700: '#202125'
        }
      }
    }
  },
  variants: {
    extend: {
      boxShadow: ['dark']
    }
  },
  plugins: []
};
