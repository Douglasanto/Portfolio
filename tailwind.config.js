/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        "dark-gray": "#A9A9A9",
      },
      boxShadow: {
        custom: "13px 13px 100px #969696, -13px -13px 100px #ffffff",
        inset: "inset 2px 5px 10px rgba(0,0,0,0.3)",
        effect: "4px 4px #323232",
      },
      scale: {
        105: "1.05",
      },
      fontSize: {
        base: [
          "1rem",
          {
            lineHeight: "2rem",
            letterSpacing: "-0.01em",
            fontWeight: "500",
          },
        ],
        xs: [
          "1.125rem",
          {
            lineHeight: "2rem",
            letterSpacing: "-0.01em",
            fontWeight: "500",
          },
        ],
        md: [
          "1.438rem",
          {
            lineHeight: "2rem",
            letterSpacing: "-0.01em",
            fontWeight: "500",
          },
        ],
        lg: [
          "2rem",
          {
            lineHeight: "2.25rem",
            letterSpacing: "-0.02em",
            fontWeight: "700",
          },
        ],
        xl: [
          "2.812rem",
          {
            lineHeight: "2.25rem",
            letterSpacing: "-0.02em",
            fontWeight: "700",
          },
        ],
        "2xl": [
          "7rem",
          {
            lineHeight: "5.5rem",
            letterSpacing: "-0.02em",
            fontWeight: "700",
          },
        ],
      },
      keyframes: {
        typing: {
          "0%": { maxWidth: "0" },
          "100%": { maxWidth: "100%" },
        },
        blink: {
          "50%": { borderColor: "transparent" },
        },
      },
      animation: {
        typing: "typing 2s steps(10, end) forwards",
        blink: "blink 0.7s step-end infinite",
      },
      transitionDuration: {
        600: "600ms",
      },
      transitionTimingFunction: {
        "custom-ease": "cubic-bezier(.16,1,.3,1)",
      },
      transitionProperty: {
        "all-custom": "all",
      },
      translate: {
        full: "100%",
      },
    },
  },
  plugins: [],
};
