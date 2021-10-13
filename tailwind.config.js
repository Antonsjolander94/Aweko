module.exports = {
  future: {
    // removeDeprecatedGapUtilities: true,
    // purgeLayersByDefault: true,
  },
  purge: [],
  theme: {
    customForms: (theme) => ({
      default: {
        input: {
          "&:focus": {
            boxShadow: undefined,
            borderColor: undefined,
          },
        },
      },
    }),
    fontFamily: {
      sans: ["soleil", "system-ui"],
      serif: ["Work Sans"],
    },
    fontSize: {
      xs: ".75rem",
      sm: ".875rem",
      tiny: ".875rem",
      base: "1rem",
      lg: "1.125rem",
      xl: "1.25rem",
      "2xl": "1.5rem",
      "3xl": "1.875rem",
      "4xl": "2.25rem",
      "5xl": "3rem",
      "6xl": "3.75rem",
      "7xl": "4.5rem",
    },
    container: {
      padding: {
        DEFAULT: "1rem",
        sm: "2rem",
      },
    },
    extend: {
      fontSize: {
        hero: "62px",
        heromobile: "2.75rem",
        headingtwo: "53px",
      },
      letterSpacing: {
        custom: ".055rem",
      },
      textColor: {
        theme: "#363D4D",
      },
      lineHeight: {
        "extra-loose": "5rem",
      },
    },
  },
  variants: {},
  plugins: [
    require("@tailwindcss/custom-forms"),
    ({ addComponents }) => {
      addComponents({
        ".container": {
          "@apply px-8 mx-auto": {},
          "@screen lg": {
            maxWidth: "1289px",
          },
        },
      });
    },
  ],
};
