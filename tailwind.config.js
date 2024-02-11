/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'active': '#01f5ff',
        'primary': '#2d4260',
      },
      backgroundImage: {
        'home': "url('./assets/images/test2.png')",
      }
    },
    fontFamily: {
      'Gilroy-Bold': ['Gilroy-Bold'],
      'Gilroy-Black': ['Gilroy-Black'],
      'Gilroy-MediumItalic': ['Gilroy-MediumItalic'],
      'Gilroy-Regular': ['Gilroy-Regular'],
    }
  },
  plugins: [],
}

