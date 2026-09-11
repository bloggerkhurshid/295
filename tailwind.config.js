/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        ink: {
          950: '#080808',
          900: '#0A0A0A',
          800: '#111111',
          700: '#161616',
          600: '#1E1E1E',
          500: '#262626',
          400: '#333333',
          300: '#444444',
        },
        accent: {
          DEFAULT: '#D61F1F',
          light: '#E83636',
          dark: '#B31515',
          muted: '#D61F1F15',
        },
        bone: {
          DEFAULT: '#F2F2F2',
          muted: '#9A9A9A',
          dim: '#6B6B6B',
        },
      },
      fontFamily: {
        display: ['Oswald', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
      },
      letterSpacing: {
        'wide-lg': '0.15em',
        'wide-xl': '0.25em',
      },
      maxWidth: {
        '8xl': '88rem',
      },
    },
  },
  plugins: [],
};
