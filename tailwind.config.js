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
        'tile-bg-checked': '#BCCED9',
        'title-hover': '#6395B8',
        'text-primary': '#7191A5'
      },
      fontSize: {
        '3xl': '2em',
        'paragraph-sm': '0.9375em',
        '6x6-number': '2,75rem',
        '4x4-number': '3,5rem'
      },
      maxWidth: {
        '2xl': '654px'
      },
      width: {
        '6/7': '87.202%'
      },
      screens: {
        'md': { 'max': '767px' },
        'sm': { 'max': '500px' },
      }
    },

  },
  plugins: [],
}

