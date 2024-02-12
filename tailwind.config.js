/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundColor: {
        'gray-dark': '#191919',
        'black-light': '#1A1A1A'
      },

      fontFamily: {
        'roboto': ['Roboto', 'sans-serif'],
        'poppins': ['poppins', 'sans-serif']
      },
      content: {
        'location': 'url(./src/assets/icon-location.svg)'
      },
      colors: {
        'yellow': '#FFB800'
      },

      screens: {
        'xsmall': { 'max': '380px' },
        'small': { 'min': '381px', 'max': '599px' },
        'md': { 'min': '600px', 'max': '960px' },
        'lg': { 'min': '961px', 'max': '1440px' },
        'xl': { 'min': '1441px', 'max': '1900px' },
        '2xl': { 'min': '1901px' }
      },


    },
  },
  plugins: [],
}


