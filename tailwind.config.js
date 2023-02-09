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
        grey: {
          700: '#333333'
        },
        green: {
          500: '#3E885B'
        },
        red: {
          500: '#B91C1C'
        }
      },
      backgroundImage: {
        'gradient-radial':
          'radial-gradient(50% 50% at 50% 50%, rgba(189, 227, 34, 0.1) 0%, rgba(23, 23, 23, 0) 100%)'
      },
      keyframes: {
        floating: {
          '0%, 100%': {
            transform: 'translateY(-10px)',
            'animation-timing-function': 'cubic-bezier(0.8, 0, 1, 1)'
          },
          '50%': {
            transform: 'translateY(0)',
            'animation-timing-function': ' cubic-bezier(0, 0, 0.2, 1)'
          }
        },
        'floating-card': {
          '0%, 100%': {
            transform: 'translateY(-5px)',
            'animation-timing-function': 'cubic-bezier(0.8, 0, 1, 1)'
          },
          '50%': {
            transform: 'translateY(0)',
            'animation-timing-function': ' cubic-bezier(0, 0, 0.2, 1)'
          }
        }
      },
      animation: {
        float: 'floating 3s infinite',
        'float-card': 'floating-card 3s infinite'
      }
    }
  },
  plugins: []
}
