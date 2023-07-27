/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html'],
  theme: {
    extend: {
      fontFamily: {
        custom: ['siemensSans'],
      }
    },
    colors: {
      'blue': '#000028',
      'blue1': '#00193c',
      'blue2': '#002949',
      'white': '#ffffff',
      'textwhite': '#fff',
      'cyan': '#00ffb9',
      'cyan1': '#00cccc',
      'gray': '#B2BEB5',
      'black' : '#000'

    }
  },
  plugins: [
    // ...
  ],
}

