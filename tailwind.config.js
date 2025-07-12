/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class', // Enable dark mode with class strategy
  theme: {
    extend: {
      colors: {
        primary: "#007BFF",
        secondary: "#6c757d",
        dark: "#212529",
        light: "#f8f9fa"
      },
      fontFamily: {
        sans: ['Inter', 'Poppins', 'Roboto', 'system-ui', 'sans-serif'],
      },
      screens: {
        'min-h-xs': { 'raw': '(min-height: 500px)' },
        'min-h-sm': { 'raw': '(min-height: 600px)' },
        'min-h-md': { 'raw': '(min-height: 700px)' },
        'min-h-lg': { 'raw': '(min-height: 800px)' },
        'min-h-xl': { 'raw': '(min-height: 900px)' },
        'min-h-2xl': { 'raw': '(min-height: 1000px)' },
      },
    },
  },
  plugins: [],
}