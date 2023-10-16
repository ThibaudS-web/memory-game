/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'bg-startmenu': '#152938',
        'btn-primary': '#FDA214',
        'btn-primary-hover': '#FFB84A',
        'btn-secondary': '#DFE7EC',
        'btn-secondary-hover': '#6395B8',
        'btn-text-color': '#FCFCFC',
        'menu': '#FCFCFC',
        'btn-secondary-text-color': '#304859',
        'menu-selection-active': '#304859',
        'menu-selection-hover': '#6395B8',
        'menu-selection-idle': '#BCCED9',
        'tile-bg-notchecked': '#304859',
        'tile-bg-matched': '#BCCED9',
        'title-hover': '#6395B8',
        'text-primary': '#7191A5'
      },
      fontSize: {
        '3xl': '2rem',
        'paragraph-sm': '0.9375rem',
        'tile-small': '2.75rem',
        'tile-large': '3.5rem'
      },
      maxWidth: {
        '2xl': '654px'
      },
      width: {
        '6/7': '87.202%',
        'tile-large': '7.375rem',
        'tile-small': '5.125rem',
        'wrapper-tile-small': '33.25rem',
        'wrapper-tile-large': '35.75rem',
        'wrapper-score&timer': '15.9375rem'
      },
      height: {
        'tile-large': '7.375rem',
        'tile-small': '5.125rem',
        'wrapper-tile-small': '33.25rem',
        'wrapper-tile-large': '35.75rem',
        'wrapper-score&timer': '4.5rem'
      },
      screens: {
        'md': { 'max': '767px' },
        'sm': { 'max': '500px' },
        'xsm': { 'max': '360px' },
      },
      backgroundColor: {
        'black': 'rgba(0, 0, 0, 0.6)'
      },
      borderRadius: {
        '3xl': '1.25rem'
      }
    },

  },
  plugins: [],
}

