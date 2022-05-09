const colors = require("tailwindcss/colors");
const fontFamily = require("./tailwind-custom/fontFamily");

module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily,
    colors: {
      main: {
        light: "#ffff",
        dark: "#02102A",
      },
      blue: {
        400: "#60A5FA",
        600: "#2563EB",
      },
      blueGray: {
        400: "#94A3B8",
      },
    },
    extend: {
      backgroundColor: (theme) => ({
        ...theme("colors"),
        "blueGray-100": "#F1F5F9",
      }),
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
