import type { Config } from "tailwindcss";
import { righteous } from "./app/ui/fonts";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        righteous: ["var(--font-righteous)"],
        "space-grotesk": ["var(--font-space-grotesk)"],
      },
      colors: {
        purple: {
          50: "#faf4ff",
          100: "#f3e6ff",
          200: "#e9d2ff",
          300: "#d8aeff",
          400: "#c07bff",
          500: "#a849ff",
          600: "#9425f8",
          700: "#7f15db",
          800: "#6c17b2",
          900: "#59148f",
          950: "#250042",
        },
      },
    },
  },
  plugins: [],
};
export default config;
