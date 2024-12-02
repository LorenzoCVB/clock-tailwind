/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Orbitron", "sans-serif"],
      },
      fontSize: {
        "clock-font": "15rem",
        "week-font": "1rem",
      },
    },
  },
  plugins: [],
};
