/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      'primary' : 'rgb(115, 100, 208)' ,
      'black': 'rgb(40, 40, 51)',
      'white': '#fff',
      'bg-light': 'rgb(246, 238, 238)',
      'disabled': 'rgb(158, 158, 158)',
      'disabled-light': 'rgb(232, 232, 232)',
      'bg-header': 'rgb(240, 230, 230)',
      'bg-dark' : 'rgba(34,34,43)',
      'bg-dark-prycard' : 'rgb(40, 40, 51)'

    },
    extend: {
      keyframes: {
        wiggle: {
          '0%, 100%': { transform: 'rotate(-3deg)', opacity: '0.05' },
          '50%': { transform: 'rotate(3deg)', opacity: '1' },
        }
      },
      animation: {
        wiggle: 'wiggle 1s ease-in-out infinite',
      },
    }
  },
  plugins: [],
  darkMode: 'class',
}