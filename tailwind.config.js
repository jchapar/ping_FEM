/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html'],
  screens: {
    sm: '480px',
    md: '768px',
    lg: '976px',
    xl: '1440px',
  },
  theme: {
    extend: {
      colors: {
        blue: 'hsl(223, 87%, 63%)',
        paleBlue: 'hsl(223, 100%, 88%)',
        lightRed: 'hsl(354, 100%, 66%)',
        gray: 'hsl(0, 0%, 59%)',
        veryDarkBlue: 'hsl(209, 33%, 12%)',
      },
      fontFamily: {
        sans: ['Libre Franklin', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
