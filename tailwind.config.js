/** @type {import('tailwindcss').Config} */

const config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
    "*.{js,ts,jsx,tsx,mdx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        // Earthy color palette
        earth: {
          50: "#f9f5f0",
          100: "#f1e8df",
          200: "#e3d1bf",
          300: "#d4b99e",
          400: "#c5a17d",
          500: "#b6895c",
          600: "#a77c4a",
          700: "#8a6539",
          800: "#6d4e27",
          900: "#503716",
        },
        moss: {
          50: "#f0f5e9",
          100: "#e0ebd3",
          200: "#c1d7a7",
          300: "#a3c37b",
          400: "#84af4f",
          500: "#659b23",
          600: "#5c8c1f",
          700: "#4d741a",
          800: "#3e5c15",
          900: "#2f4410",
        },
        clay: {
          50: "#f7f2f0",
          100: "#efe5e0",
          200: "#dfcbc1",
          300: "#cfb1a2",
          400: "#bf9783",
          500: "#af7d64",
          600: "#9f6345",
          700: "#7f4f37",
          800: "#5f3b29",
          900: "#3f271b",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
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
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};

export default config;
