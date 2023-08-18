/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "portfolio-primary-cyan": "#5fb4a2",
        "portfolio-primary-blue": "#203A4C",
        "portfolio-primary-darkblue": "#33323D",
        "portfolio-secondary-lightgrey": "#FAFAFA",
        "portfolio-secondary-grey": "#eaeaeb",
        "portfolio-secondary-red": "#FA3030",
      },
    },
    fontFamily: {
      IbarraRealNova: ["Ibarra Real Nova, serif"],
      PublicSans: ["Public Sans, sans-serif"],
    },
    screens: {
      sm: '375px',
      md: '768px',
      lg: '1440px',
    },
  },
  plugins: [],
};

