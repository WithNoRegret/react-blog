/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      gridTemplateColumns: {
        'auto-fill-400': 'repeat(auto-fill, minmax(400px, 1fr))',
        'auto-fit-400': 'repeat(auto-fit, minmax(400px, 1fr))',
      },
      height:{
        'screen-1/2': '50vh',
      },
      width:{
        'screen-1/2': '50vw',
      }
    },
  },
  plugins: [],
}

