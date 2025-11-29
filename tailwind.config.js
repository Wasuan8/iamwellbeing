/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        alegreya: ['Alegreya', 'serif'],
        nexa: ['Nexa Script', 'cursive'],  // This is important for Nexa Script
      },
      
      screens: {
        xs: "475px",
        md: "900px",
        tab: "768px", // Custom break for tablets
        xl: "1600px",
      },
      backgroundSize: {
        positionLarge: "220px",
        positionSmall: "13rem",
        positionSmaller: "170px",
        bgSize: "90rem",
      },
      colors: {
        customPeach: "#F9B185",
        customGreen: "#a8d940",
      },
      borderRadius: {
        "50px": "50px",
      },
    },
  },
  plugins: [],
};
