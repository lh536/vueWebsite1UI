module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'webSite': {
          'lightGray': '#F1F1F1',
          'gray': '#C9C9C9',
          'green': '#70877B',
          'black': '#161616',
          'white': '#FFFFFF',
          'red': '#FF0000',
        },
      },
      fontFamily: {
        josefin: ['Josefin Sans', 'sans-serif']
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
    require('@tailwindcss/line-clamp'),
    require('@tailwindcss/aspect-ratio'),
  ],
}
