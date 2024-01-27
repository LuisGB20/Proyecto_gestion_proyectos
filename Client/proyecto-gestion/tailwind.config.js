/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        'strong': '0 6px 40px rgba(0, 0, 0, 0.8)', // Clase de sombra personalizada
        'custom-with-gradient': '0 6px 40px rgba(0, 0, 0, 0.8), inset 0 0 0 100px linear-gradient(to right, #800080, #000080)',
      },
    },
  },
  plugins: [],
}

