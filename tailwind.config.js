/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      colors: {
        primaryColor: "var(--primary-color)",
        primaryButtonBgColor: "var(--primary-button-bg-color)",
        primaryButtonHoverColor: "var(--primary-button-hover-color)",
        primaryLabelTextColor: "var(--primary-label-text-color)",
        secondaryColor: "var(--secondary-color)",
        secondaryButtonBgColor: "var(--secondary-button-bg-color)",
        secondaryButtonHoverColor: "var(--secondary-button-hover-color)",
        secondaryLabelTextColor: "var(--secondary-label-text-color)",
      },
    },
  },
  variants: {
    extend: {
      display: ["responsive"],
    },
  },
  plugins: [],
};
