const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      screens: {
        'md': '769px'
      },
      fontFamily: {
        "sans": ["halyard-display", ...defaultTheme.fontFamily.sans],
        "display": ["lust-didone", "sans"]
      },
      colors: {
        "exp-blue": "#009cde",
        "exp-yellow": "#FFBE00",
        "exp-black": "#000000",
        "exp-white": "#ffffff"
      },
      container: {
        "center": true,
        "padding": "2rem"
      },
      backgroundImage: {
        "hero-image": "url(/assets/socios header.jpg)"
      },
      animation: {
        'spin-slow': 'spin 30s linear infinite',
      }
    },
  },
  plugins: [],
}
