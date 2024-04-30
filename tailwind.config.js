/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        keyboard: "types 6s steps(30, end), cursorblink 1s infinite",
      },
      keyframes: {
        types: {
          "0%": { width: "0px" },
          "100%": { width: "500px" },
        },
        cursorblink: {
          "0%,100%": { borderColor: "transparent" },
          "50%": { borderColor: "#ffffff" },
        },
      },
    },
  },
  plugins: [],
};
