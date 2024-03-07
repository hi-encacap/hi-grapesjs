/** @type {import('tailwindcss').Config} */
import defaultTheme from "tailwindcss/defaultTheme";

export default {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        "be-vietnam-pro": ["Be Vietnam Pro", ...defaultTheme.fontFamily.sans],
      },
      height: {
        0.75: "0.1875rem", // 3px
      },
    },
  },
  plugins: [],
};

