/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        lightPurple: '#f8eef7',
        grey: '#080011',
        pink: 'rgba(247, 223, 227, 0.4)',
        otherPurple: '#e7c1ee',
        success: ' #F6EBD6'
      }
    },
  },
  plugins: [],
}

