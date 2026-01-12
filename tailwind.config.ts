import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        forest: {
          DEFAULT: "#1a3a2f",
          deep: "#0d1f18",
        },
        gold: {
          DEFAULT: "#c9a962",
          light: "#e8d5a3",
        },
        cream: {
          DEFAULT: "#faf8f5",
          warm: "#f5f0e8",
        },
        slate: "#4a5568",
      },
      fontFamily: {
        display: ["var(--font-display)", "Cormorant Garamond", "serif"],
        sans: ["var(--font-sans)", "DM Sans", "sans-serif"],
      },
      animation: {
        float: "float 20s ease-in-out infinite",
        "scroll-pulse": "scrollPulse 2s ease-in-out infinite",
        underline: "underline 1s ease forwards",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translate(0, 0) rotate(0deg)" },
          "25%": { transform: "translate(20px, -30px) rotate(5deg)" },
          "50%": { transform: "translate(-10px, 20px) rotate(-5deg)" },
          "75%": { transform: "translate(30px, 10px) rotate(3deg)" },
        },
        scrollPulse: {
          "0%, 100%": { opacity: "1", height: "60px" },
          "50%": { opacity: "0.5", height: "40px" },
        },
        underline: {
          to: { transform: "scaleX(1)", transformOrigin: "left" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
