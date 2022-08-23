/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/*.html"],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
      },
    extend: {
      backgroundImage: {
        'equil': "url('/images/icon-clock.sbg')"
      },
      fontFamily: {
        "outfit": 'Outfit, sans-serif;'
      },
      colors: {
        softBlue: "#8BACD9",
        cy: "hsl(178, 100%, 50%)",
        mainDarkBlue: "hsl(217, 54%, 11%)",
        cardDarkBlue: "hsl(216, 50%, 16%)",
        lineDarkBlue: "hsl(215, 32%, 27%)",
        White: "hsl(0, 0%, 100%)",
      }
    },
  },
  plugins: [],
}
