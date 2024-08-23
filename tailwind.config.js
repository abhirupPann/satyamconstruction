const {
  default: flattenColorPalette,
} = require("tailwindcss/lib/util/flattenColorPalette");

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily:{
        "Monarda": ["Monarda", "sans serif"],
        "Poiret": ["Poiret One", "sans serif"],
        "Fjalla": ["Fjalla One", "sans serif"],
      },
      textColor:{
        "uniqueYellow": "#E6CD4A",
        "uniqueBrown": "#572302"
      },
      colors: {
        "uniqueYellow": "#E6CD4A",
        "uniqueBrown": "#572302"
      }
    },
  },
  plugins: [addVariablesForColors],
}

function addVariablesForColors({ addBase, theme }) {
  let allColors = flattenColorPalette(theme("colors"));
  let newVars = Object.fromEntries(
    Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
  );
 
  addBase({
    ":root": newVars,
  });
}
