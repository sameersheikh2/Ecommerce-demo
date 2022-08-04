/** @type {import('tailwindcss').Config} */ 
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {fontFamily: {
      'Roboto': ['Roboto', 'sans-serif'] 
    },
    boxShadow: {
      '3xl': '0px 1px 15px 1px rgba(0,0,0,0.22)',
    }},
  },
  plugins: [],
}