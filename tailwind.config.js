/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    extend: {
      colors : {
        primary : '#0E2954',
        secondary : '#1F6E8C',
        biru : '#00B9FF',
        abu : '#C9C9C9',
        button : '#4ED9EF'
      },
      fontFamily : {
        'poppins' : ['Poppins']
      }
    },
  },
  plugins: [],
}

