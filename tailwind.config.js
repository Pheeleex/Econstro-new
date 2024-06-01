/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      size:{
          vs: '12px'
      },
      colors: {
        lightPurple: '#f8eef7',
        grey: 'rgb(128, 126, 126)',
        gray: '#30026557',
        pink: 'rgba(247, 223, 227, 0.4)',
        otherPurple: '#e7c1ee',
        success: ' #F6EBD6',
        red_700: ' #C50707',
      }
    },
  },
  plugins: [],
}

