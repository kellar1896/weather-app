/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        jet: 'var(--jet)',
        darkBlue: 'var(--dark-blue)',
        byzantineBlue: 'var(--byzantine-blue)',
        powderBlue: 'var(--powder-blue)',
        ivory: 'var(--ivory)',
      }
    },
  },
  plugins: [],
}

