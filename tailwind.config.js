/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./containers/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        proximaNovaLight: ["ProximaNovaLight", "sans-serif"],
        proximaNova: ["ProximaNova", "sans-serif"],
        proximaNovaBold: ["ProximaNovaBold", "sans-serif"],
        proximaNovaMedium: ["ProximaNovaMedium", "sans-serif"],
        proximaNovaSemiBold: ["ProximaNovaSemibold", "sans-serif"],
      }
    },
  },
  plugins: [],
};
