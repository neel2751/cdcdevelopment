const colors = require("tailwindcss/colors");
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}", "./**/*.{html,js}"],
  theme: {
    colors: {
      transparent: "transparent",
      current: "currentColor",
      white: colors.white,
      gray: colors.gray,
      slate: colors.slate,
      neutral: colors.neutral,
      electric: {
        50: "#f4f2ff",
        100: "#eae8ff",
        200: "#d8d4ff",
        300: "#bbb1ff",
        400: "#9985ff",
        500: "#7954fe",
        600: "#703bf7",
        700: "#5a1fe2",
        800: "#4b19be",
        900: "#40179b",
        950: "#250b6a",
      },

      lime: {
        50: "#fbffe5",
        100: "#f3ffc8",
        200: "#e6ff97",
        300: "#cbfb45",
        400: "#bbf229",
        500: "#9cd80a",
        600: "#78ad03",
        700: "#5b8308",
        800: "#49670d",
        900: "#3d5710",
        950: "#1f3102",
      },
      emerald: {
        50: "#ebfef4",
        100: "#cffce3",
        200: "#a4f6cc",
        300: "#69ecb1",
        400: "#2ed992",
        500: "#0acf83",
        600: "#009c63",
        700: "#007d52",
        800: "#026343",
        900: "#035138",
        950: "#002e20",
      },
    },
  },

  // ...
};

// module.exports = {
//   content: ["./public/*"],
//   theme: {
//     extend: {},
//   },
//   plugins: [],
// };
