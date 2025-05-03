/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          red: '#D9232D',
          blue: '#3884B1',
          lightBlue: '#5AA0C7',
          darkBlue: '#2A6A8F',
          grey: '#F8F9FA',
          darkGrey: '#333333'
        }
      },
      fontFamily: {
        heading: ['Montserrat', 'sans-serif'],
        body: ['Open Sans', 'sans-serif']
      },
      spacing: {
        '128': '32rem',
      },
      backgroundImage: {
        'water-pattern': "url('/images/water-pattern.png')",
        'hero-image': "url('https://images.pexels.com/photos/6368/water-hand-blue-summer.jpg?auto=compress&cs=tinysrgb&w=1920')"
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.5s ease-out'
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' }
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' }
        }
      }
    },
  },
  plugins: [],
};