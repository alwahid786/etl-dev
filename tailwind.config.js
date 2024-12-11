/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primaryDark: "#FCA04B",
        primaryLight: "#fff",
        secondaryGray: "#00000050",
      },
    },
  },
  plugins: [],
};
