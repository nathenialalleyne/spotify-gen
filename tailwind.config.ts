import { type Config } from "tailwindcss";

export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      keyframes: {
        "move-up": {
          "0%": { transform: "translateY(100px)" },
          "100%": { transform: "translateY(-2000px)" },
        },
      },
      animation: {
        "move-up": "move-up 25s infinite",
      },
    },
  },
  plugins: [require("tailwindcss-animation-delay")],
} satisfies Config;
