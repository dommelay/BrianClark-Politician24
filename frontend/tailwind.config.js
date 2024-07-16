/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        blue: '#040273',
        grey: '#e4e4e4',
      },
      maxWidth: {
        '25': '25rem'
      },
    },
  },
  plugins: [],
}

