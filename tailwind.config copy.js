/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    letterSpacing: {
      tightest: '-.075em',
      tighter: '-.05em',
      normal: '0',
      wider: '.1em',
      widest: '.25em',
      },
      
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
    /* container: {
      padding: "2rem",
      center: true,
    }, */
    screens: {
      sm: '375px',
      md: '768px',
      lg: '1440px',
      // xl: '1440px',
    },
    fontSize: {
      'sm': ['15px', '30px'],
      'base': ['16px', '30px'],
      'lg': ['32px', {
        lineHeight: '36px',
        letterSpacing: '-0.29px',
        fontWeight: '400',
      }],
      'xl': ['40px', {
        lineHeight: '42px',
        letterSpacing: '-0.36px',
        fontWeight: '600',
      }],
      '2xl': ['50px', {
        lineHeight: '60px',
        letterSpacing: '-0.45px',
        fontWeight: '700',
      }],
    }
  },
  plugins: [],
}

