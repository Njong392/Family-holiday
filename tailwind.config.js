/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      snow: "#F0F8FF",
      white: "#FFFFFF",
      deepgray: "#2A3439",
      lightgray: "#555555",
      blue: "#0072BB",
      transparent: "#FFFFFF",
      red: "#E23D28",
      green: "#177245",
    },
    screens: {
      sm: "320px",
      md: "640px",
      xmd: "840px",
      lg: "1024px",
      xl: "1280px",
      _2k: "2000px",
    },
    fontFamily: {
      poppins: ["Poppins", "sans-serif"],
    },
    extend: {},
  },
  plugins: [require("@tailwindcss/forms")],
};
