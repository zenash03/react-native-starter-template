/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all of your component files.
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        main: "#f6f8f9",
      },
      fontFamily: {
        nlight: ["Nunito-Light", "sans-serif"],
        nregular: ["Nunito-Regular", "sans-serif"],
        nmedium: ["Nunito-Medium", "sans-serif"],
        nsemibold: ["Nunito-SemiBold", "sans-serif"],
        nbold: ["Nunito-Bold", "sans-serif"],
        nextrabold: ["Nunito-ExtraBold", "sans-serif"],
        nBlack: ["Nunito-Black", "sans-serif"],

      }
    },
  },
  plugins: [],
}