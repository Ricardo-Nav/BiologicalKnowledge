import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#2f3e46",
        secondary: "#cad2c5",
        third: "#52796f",
        fourth: "#84a98c",
        whiteLotus: "#f5f5f5",
        redFlag: "#d96868",
        greenFlag: "#4bef56",
      },
      fontFamily: {
        Lora: ["var(--font-lora)", "sans-serif"],
        LibreBaskerville: ["var(--font-libre-baskerville)", "sans-serif"],
        Archivo: ["var(--font-archivo)", "sans-serif"],
      },
    },
  },
  plugins: [],
} satisfies Config;
