/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      'primary' : 'rgb(115, 100, 208)' ,
      'black': '#000',
      'white': '#fff',
      'bg-light': 'rgb(246, 238, 238)',
      'disabled': '#cccccc',
    },
    extend: {},
  },
  plugins: [],
}