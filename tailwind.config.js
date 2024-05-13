/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      '2xl': {'max': '1535px'},
      // => @media (max-width: 1535px) { ... }

      'xl': {'max': '1279px'},
      // => @media (max-width: 1279px) { ... }

      'lg': {'max': '920px'},
      // => @media (max-width: 1023px) { ... }

      'md': {'max': '768px'},
      // => @media (max-width: 767px) { ... }

      'sm': {'max': '480px'},
      // => @media (max-width: 639px) { ... }
    },
    extend: {
      animation : {
        filter: 'filter 1s forwards ',
        cards: 'cards 1s forwards '
      },
      keyframes: {
        filter: {
          '0%' : {transform: 'translateY(100%)'},
          '100%': {transform: 'translateY(0)'}
        },
        cards: {
          '0%' : {transform: 'translateY(20%)', opacity: '0'},
          '100%': {transform: 'translateY(0)', opacity: '1' }
        }
      }
    },
  },
  plugins: [],
}