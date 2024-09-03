/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js,jsx,ts,tsx}",
    "./public/index.html",
  ],
  theme: {
    screens: {
      'sm': '480px',
      'md': '768px',
      'lg': '920px',
      'xl': '1280px',
      '2xl': '1536px',
    },
    extend: {
      fontFamily: {
        Arimo: ["Arimo"],
        Microsoft: ["Microsoft Sans Serif"],
      }
    },
  },
  plugins: [],
}

