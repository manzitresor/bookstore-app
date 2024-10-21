/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#FFCE1A',
        'secondary': '#EAEAEAE5',
        'textColor': '#0D084285'
      }
    },
  },
  plugins: [],
}

