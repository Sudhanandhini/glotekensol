/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#FF6B35',
          dark: '#ff5722',
        },
        secondary: {
          DEFAULT: '#001B3D',
          light: '#002447',
        }
      },
      fontFamily: {
        sans: ['"Jost"', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
