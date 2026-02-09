import type { Config } from "tailwindcss";
import plugin from "tailwindcss/plugin";

const config: Config = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],

  theme: {
    extend: {
      /* ---------------- Container ---------------- */
      container: {
        center: true,
        padding: {
          DEFAULT: "1.25rem",
          sm: "2rem",
          md: "2.5rem",
          lg: "2rem",
          xl: "2rem",
          "2xl": "10rem",
        },
      },

      /* ---------------- Colors ---------------- */
      colors: {
        primary: {
          600: "#996830",
          300: "#C4A386",
          100: "#E6D8CC",
        },
        neutral: {
          900: "#2C2C2C",
          700: "#444444",
          500: "#7C7C7C",
          300: "#D9D9D6",
          100: "#E5E5E5",
        },
      },

      /* ---------------- Fonts ---------------- */
      fontFamily: {
        display: ["Playfair Display", "sans-serif"],
        body: ["Outfit", "sans-serif"],
      },

      /* ---------------- Typography ---------------- */
      fontSize: {
        "display-2xl": [
          "72px",
          { lineHeight: "96px", letterSpacing: "-0.025em" },
        ],
        "display-xl": [
          "60px",
          { lineHeight: "72px", letterSpacing: "-0.025em" },
        ],
        "display-lg": ["48px", { lineHeight: "60px" }],
        "display-md": ["36px", { lineHeight: "48px" }],
        "display-sm": ["30px", { lineHeight: "40px" }],
        "display-xs": ["24px", { lineHeight: "32px" }],

        "body-xl": ["20px", { lineHeight: "32px" }],
        "body-lg": ["18px", { lineHeight: "32px" }],
        "body-md": ["16px", { lineHeight: "24px" }],
        "body-sm": ["14px", { lineHeight: "24px" }],
        "body-xs": ["12px", { lineHeight: "16px" }],
      },

      /* ---------------- Shadows ---------------- */
      boxShadow: {
        xs: "0px 1px 2px rgba(17, 24, 39, 0.05)",
        sm: "0px 1px 3px rgba(17, 24, 39, 0.1), 0px 1px 2px rgba(17, 24, 39, 0.06)",
        md: "0px 4px 8px -2px rgba(17, 24, 39, 0.1), 0px 2px 4px -2px rgba(17, 24, 39, 0.06)",
        lg: "0px 12px 16px -4px rgba(17, 24, 39, 0.1), 0px 4px 6px -2px rgba(17, 24, 39, 0.05)",
        xl: "0px 20px 24px -4px rgba(17, 24, 39, 0.1), 0px 8px 8px -4px rgba(17, 24, 39, 0.04)",
        "2xl": "0px 24px 48px -12px rgba(17, 24, 39, 0.25)",
      },

      /* ---------------- Spacing ---------------- */
      spacing: {
        18: "72px",
        22: "88px",
        30: "120px",
        62: "248px",
      },
    },
  },

  plugins: [
    plugin(({ addUtilities }) => {
      addUtilities({
        ".vertical-rl": {
          writingMode: "vertical-rl",
        },
      });
    }),
  ],
};

export default config;
