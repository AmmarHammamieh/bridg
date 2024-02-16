/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./node_modules/flowbite-react/**/*.js"
  ],
  theme: {
    extend: {
      colors: {
        'active': '#01f5ff',
        'primary': '#2d4260',
      },
    },
    fontFamily: {
      'Gilroy-Bold': ['Gilroy-Bold'],
      'Gilroy-Black': ['Gilroy-Black'],
      'Gilroy-MediumItalic': ['Gilroy-MediumItalic'],
      'Gilroy-Regular': ['Gilroy-Regular'],
    }
  },
  plugins: [
    require('flowbite/plugin')
  ],
}

