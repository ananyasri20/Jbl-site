/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'jbl-orange': '#FF4500',
        'jbl-dark': '#1a1a1a',
        'jbl-gray': '#2a2a2a',
      },
      fontFamily: {
         oswald: ['Oswald', 'sans-serif'],
      magra: ['Magra', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
