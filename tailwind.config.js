/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: 'rgb(253, 139, 0)',
        secondary: 'rgb(255, 218, 175)',
        darkPrimary: 'rgb(213, 116, 0)',
      },
    },
  },
  plugins: [],
}

