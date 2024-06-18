import type { Config } from "tailwindcss";

const config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    screens: {
      xs: "480px",
      sm: "640px",
      md: "768px",
      "2md": "880px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
      " max-xl": "2400px",
    },
    backgroundImage: {
      hero: "url(/images/bg-image.webp)",
    },

    container: {
      center: true,
      screens: {
        "max-xl": "2400px",
      },
    },
    extend: {
      colors: {
        accent: "#ffb039",
        primary: "#16202a",
        primaryAccent: "#23313e",
        lightBg: "#f4f8fa",
      },
      spacing: {
        "header-height": "var(--header-height)",
      },

      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-100%)" },
        },
        grow: {
          "0%, 100%": { transform: "scale(1)" },
          "50%": { transform: "scale(1.09)" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          " 100%": { opacity: "1" },
        },
        fadeOut: {
          "0%": { opacity: "1" },
          "100%": { opacity: "0" },
        },
      },
      animation: {
        marquee: "marquee 35s linear infinite",
        "accordion-down": "accordion-down 0.5s ease-out",
        "accordion-up": "accordion-up 0.5s ease-out",
        "spin-slow": "spin 9s linear infinite",
        grow: "grow 20s ease-in-out infinite",
        fadeIn: "fadeIn 2s ease-in-out forwards",
        fadeOut: "fadeOut 2s ease-in-out forwards",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;

export default config;
