/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'mit-yellow': '#ddea4a',
        'mit-violet': '#403165',
        'mit-shiny-violet':'#003feb',
        'mit-brown': '#a32e00',
        'mit-blue': '#0a2bf5'
      },
    },
  },
  plugins: [],
};
