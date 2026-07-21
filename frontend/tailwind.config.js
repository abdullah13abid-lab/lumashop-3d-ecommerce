/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,jsx}',
  ],
  theme: {
    extend: {
      colors: {
        'dark-navy': '#0D1B2A',
        'electric-blue': '#3A86FF',
      },
    },
  },
  plugins: [],
}