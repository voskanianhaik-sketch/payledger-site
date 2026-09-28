/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: '#0B1F3A',
          50: '#E8ECF2',
          100: '#C8D1DE',
          200: '#9AABC2',
          300: '#6B80A6',
          400: '#3D557F',
          500: '#1A3A5C',
          600: '#0B1F3A',
          700: '#081627',
          800: '#050E1B',
          900: '#03080F',
        },
        cream: {
          DEFAULT: '#FAF9F6',
          dark: '#F2F0EA',
        },
        amber: {
          DEFAULT: '#E0A33E',
          light: '#EAB85C',
          dark: '#C48A2A',
        },
        charcoal: {
          DEFAULT: '#2A2E35',
          light: '#4A4E55',
        },
      },
      fontFamily: {
        serif: ['Fraunces', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        'label': '0.18em',
      },
      fontWeight: {
        '300': '300',
        '400': '400',
        '500': '500',
        '600': '600',
        '700': '700',
      },
      maxWidth: {
        'content': '1280px',
      },
    },
  },
  plugins: [],
};
