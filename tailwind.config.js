/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './src/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          main: '#BDE322',
          secondary: '#171717'
        },
        green: {
          500: '#3E885B'
        },
        red: {
          500: '#B91C1C'
        }
      }
    }
  },
  plugins: []
}
