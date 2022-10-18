/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        maroon: '#56042C',
        ocean: '#1077C3',
        gold: '#FEC310',
        dark: '#212227',
        light: '#F3F3F4',
      }
    },
  },
  plugins: [],
}
