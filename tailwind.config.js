const colors = require("tailwindcss/colors");
const fontFamily = require("./tailwind-custom/fontFamily");

module.exports = {
  mode: "jit",
  purge: ["./client/**/*.{js,vue}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily,
    screens: {
      sm: "720px",
      lg: "1099px",
    },
    colors: {
      main: {
        light: "#ffff",
        dark: "#02102A",
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
      colors: {
        blue: colors.blue,
        sky: colors.sky,
        gray: colors.gray,
      },
      gridTemplateRows: {
        12: "repeat(12, minmax(0, 1fr))",
      },
    },
  },
  variants: {
    backgroundColor: [
      "responsive",
      "group-hover",
      "focus-within",
      "hover",
      "focus",
    ],
    extend: {},
  },
  plugins: [],
};
