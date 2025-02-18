/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js}"],
  darkMode: "selector",
  theme: {
    extend: {
      gridTemplateColumns: {
        auto: "repeat(auto-fit, minmax(200px, 1fr))",
      },
      fontFamily: {
        outfit: ["Outfit", "sans-serif"],
        ovo: ["Ovo", "serif"],
      },
      animation: {
        spinSlow: "spin 3s linear infinite",
        animateSpinSlow: "spin 3s linear infinite",
      },
      colors: {
        lightHover: "#fcf4ff",
        darkHover: "#2a004a",
        darkTheme: "#11011F",
      },
      boxShadow: {
        black: "4px 4px 0 #000",
        white: "4px 4px 0 #fff",
      },
    },
  },
};
