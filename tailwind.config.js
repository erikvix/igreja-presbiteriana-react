/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{jx,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "dark-green": "#40543B",
        "light-green": "#77A66A",
        beige: "#F1E9DA",
        brown: "#756B5D",
        "dark-red": "#BB4430",
        "black-c": "#1D1D1D",
        "white-beige": "#E7E5E4",
        "light-gray": "#D9D9D9",
      },
    },
  },
  plugins: [
    require('flowbite/plugin')
]
};
