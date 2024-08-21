/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        orange: "#E58411",
        black1: "#1E1E1E",
        black2: "#343434",
        greyText: "#4B4B4B",
        grey1: "#F7F7F7",
        grey2: "#FAFAFA",
        grey3: "#EEEEEE",
      },
      fontFamily: {
        sans: ["Poppins", "sans-serif"],
      },
      fontSize: {
        h1: ["75px", "1.3"], 
        h2: ["42px"],
        h3: ["24px"],
        title: ["18px"],
        p: ["18px", "1.8"], 
      },
    },
  },
  plugins: [],
};
