import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {},
      fontFamily: {
        comfortaa: ["var(--font-comfortaa)"],
        coiny: ["var(--font-coinyCirilic)"],
      },
      container: {
        center: true,
        padding: "15px",
      },
      screens: {
        sm: "640px",

        md: "768px",

        lg: "1024px",

        xl: "1200px",

        "2xl": "1200px",
      },
      boxShadow: {
        "3xl": "0px 0px 3px 1px rgba(0, 0, 0, 0.25)",
      },
    },
  },
  plugins: [],
};
export default config;
