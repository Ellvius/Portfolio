import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#ADEFD1FF",
        secondary: "#00203FFF",
        dark: "#04151F",
        light: "#D4ECDD" 
      },
    },
  },
  plugins: [],
} satisfies Config;
