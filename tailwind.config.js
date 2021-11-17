module.exports = {
  purge: ["src/index.html", "src/**/*.ts", "src/**/*.svelte"],
  mode: "jit",
  theme: {
    fontFamily: {
      sans: "Poppins"
    },
    fontWeight: {
      regular: 400,
      semibold: 600,
      bold: 700
    },
    fontSize: {
      DEFAULT: "1rem",
      md: "1.125rem",
      lg: "1.25rem",
      xl: "1.5rem",
      "2xl": "2rem",
      "3xl": "4rem",
      "4xl": "6rem"
    },
    colors: {
      white: "#ffffff",
      black: "#030303",
      gray: {
        100: "#a0a0a0"
      }
    }
  },
  plugins: []
};
