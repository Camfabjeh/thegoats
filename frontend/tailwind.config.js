/* eslint-disable prettier/prettier */
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    colors: {
      softblue: "#23ADDA",
      darkblue: "#233D8D",
      lightgrey: "#F5F5F5",
      green: "#00ACB0",
      yellow: "#FECC38",
      purple: "#E53750",
      black: "#272350",
      blue: "#2A49A1",
      otherblue: "#3157B0",
      thirdblue: "#3765BD",
      fourthblue: "#3E74CA",
    },
    fontFamily: {
      text: ["Barlow", "sans-serif"],
      title: ["Fira Sans", "sans-serif"],
    },
    extend: {},
  },
  plugins: [],
};
