/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        marquee: "marquee var(--duration, 30s) linear infinite",
        'marquee-reverse': "marquee-reverse var(--duration, 30s) linear infinite", // Nueva animación para el segundo slider
      },
      keyframes: {
        marquee: {
          to: { transform: "translateX(-50%)" },
        },
        'marquee-reverse': { // Definición de los keyframes para el segundo slider
          to: { transform: "translateX(50%)" }, // Cambia -50% a 50%
        },
      },
    },
},
  plugins: [],
}

