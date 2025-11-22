/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./views/**/*.ejs",
    "./views/**/*.html",
    "./partials/**/*.ejs",
    "./*.ejs",
    "./public/**/*.js"
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#923796',   // purple
          hover: '#7a2f7e',     // darker purple for hover
        },
        secondary: {
          DEFAULT: '#a07723',   // gold
          hover: '#8a661e',     // darker gold for hover
        },

        brand: {
          gold: "#a07723",
          purple: "#923796",
          gray: "#adaeb2",
        },
      },

      fontFamily: {
        montserrat: ['Montserrat', 'sans-serif'],
        'open-sans': ['Open Sans', 'sans-serif'],
      },
      fontSize: {
        base: "15px",
        h1: "48px",
        h2: "36px",
        h3: "28px",
        h4: "22px",
        h5: "18px",
        h6: "16px",
      },
    },
  },
  plugins: [],
}
