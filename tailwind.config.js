const colors = require("tailwindcss/colors");
const fontFamily = require("./tailwind-custom/fontFamily");
const scale = require("./tailwind-custom/scale");

module.exports = {
  mode: "jit",
  purge: ["./public/**/*.html", "./client/**/*.{js,jsx,ts,tsx,vue}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily,
    colors: {
      main: {
        light: "#ffff",
        dark: "#02102A",
      },
      blueGray: {
        400: "#94A3B8",
      },
      icon: "#ffd0a1",
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
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
