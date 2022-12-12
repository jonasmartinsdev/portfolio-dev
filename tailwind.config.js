/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.tsx'
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: 'Poppins, sans-serif',
      },
      colors: {
        portfolio :{
          primary: '#7562E0',
          secondary: '#31313F',
          header: '#181824',
          light: '#F5F5F5',
          low: '#BDBDBD'
        },
      },
    },
  },
  plugins: [],
};