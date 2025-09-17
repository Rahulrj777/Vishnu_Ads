/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'bricolage': ['"Bricolage Grotesque"', 'sans-serif'],
        'bebas': ['"Bebas Neue"', 'cursive'], // Adding Bebas Neue
        'public-sans': ['"Public Sans"', 'sans-serif'],
        signika: ['Signika', 'sans-serif'],
        sans: ['"Open Sans"', 'sans-serif'],
        triumvirate: ['"AT Triumvirate Condensed"', 'sans-serif'],
        ocr: ['"OCR A Extended"', 'monospace'],
        sans: ['"Noto Sans"', 'sans-serif'],
      },
      screens: {
        '4k': '3000px', // Custom breakpoint for 4K screens
      },


    },
  },
  plugins: [],
}