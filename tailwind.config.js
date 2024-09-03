/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js,jsx,ts,tsx}",
    "./public/index.html",
  ],
  theme: {
    extend: {
      fontFamily: {
        Arimo: ["Arimo"],
        Microsoft: ["Microsoft Sans Serif"],
      }
    },
  },
  plugins: [],
}

