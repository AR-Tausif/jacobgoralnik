import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        primary: {
          DEFAULT: "#153AFE",
          foreground: "#E8EBFF",
          50: "#E8EBFF",
          100: "#071459 ",
          200: "#B6C2FF",
          300: "#153AFE",
          400: "#1334E5",
          500: "#112ECB",
          600: "#102CBF",
          700: "#0D2398",
          800: "#091A72",
          900: "#071459",
          950: "#153AFE",
        },
        secondary: {
          DEFAULT: "#1C1C1E",
          foreground: "oklch(var(--color-red-50))",
          50: "#E8E8E9",
          100: "#DDDDDD",
          200: "#E9EBF8",
          300: "#1C1C1E",
          400: "#19191B",
          500: "#161618",
          600: "#151517",
          700: "#111112",
          800: "#0D0D0D",
          900: "#0D0D0D",
          950: "#1C1C1E",
        },
        success: {
          DEFAULT: "oklch(var(--color-green-600))",
          foreground: "oklch(var(--color-green-50))",
          50: "oklch(var(--color-green-50))",
          100: "oklch(var(--color-green-100))",
          200: "oklch(var(--color-green-200))",
          300: "oklch(var(--color-green-300))",
          400: "oklch(var(--color-green-400))",
          500: "oklch(var(--color-green-500))",
          600: "oklch(var(--color-green-600))",
          700: "oklch(var(--color-green-700))",
          800: "oklch(var(--color-green-800))",
          900: "oklch(var(--color-green-900))",
          950: "oklch(var(--color-green-950))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        destructive: {
          DEFAULT: "#CD0335",
          foreground: "#C72E4D",
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        chart: {
          "1": "hsl(var(--chart-1))",
          "2": "hsl(var(--chart-2))",
          "3": "hsl(var(--chart-3))",
          "4": "hsl(var(--chart-4))",
          "5": "hsl(var(--chart-5))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      container: {
        center: true,
        padding: {
          DEFAULT: "1rem",
          sm: "2rem",
          lg: "4rem",
          xl: "5rem",
          "2xl": "6rem",
        },
        screens: {
          sm: "640px",
          md: "768px",
          lg: "1024px",
          xl: "1280px",
          "2xl": "1536px",
        },
      },
      keyframes: {
        "accordion-down": {
          from: {
            height: "0",
          },
          to: {
            height: "var(--radix-accordion-content-height)",
          },
        },
        "accordion-up": {
          from: {
            height: "var(--radix-accordion-content-height)",
          },
          to: {
            height: "0",
          },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
