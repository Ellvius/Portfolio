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
        primary: "#F4AB6A",
        secondary: "#454F2C",
        dark: "#262A18",
        light: "#FDEECE" 
      },
    },
  },
  plugins: [],
} satisfies Config;
