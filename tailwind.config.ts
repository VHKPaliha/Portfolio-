// Import Tailwind CSS configuration type
import type { Config } from "tailwindcss"

// Tailwind CSS configuration object
const config = {
  // Dark mode configuration - use class-based dark mode
  darkMode: ["class"],

  // Content paths for Tailwind to scan for classes
  content: [
    "./pages/**/*.{ts,tsx}", // Pages directory
    "./components/**/*.{ts,tsx}", // Components directory
    "./app/**/*.{ts,tsx}", // App directory (Next.js 13+)
    "./src/**/*.{ts,tsx}", // Source directory
    "*.{js,ts,jsx,tsx,mdx}", // Root level files
  ],

  prefix: "", // No prefix for Tailwind classes

  theme: {
    // Container configuration
    container: {
      center: true, // Center containers by default
      padding: "2rem", // Default container padding
      screens: {
        "2xl": "1400px", // Max width for 2xl screens
      },
    },

    extend: {
      // Extended color palette
      colors: {
        // Professional black and charcoal palette
        "pure-black": "#000000",
        "dark-charcoal": "#121212",
        "medium-charcoal": "#1a1a1a",
        "light-charcoal": "#262626",
        charcoal: "#333333",
        "light-gray": "#f5f5f5",
        "medium-gray": "#a6a6a6",
        "dark-gray": "#666666",

        // System colors using CSS custom properties
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",

        // Primary color variants
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },

        // Secondary color variants
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },

        // Destructive color variants
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },

        // Muted color variants
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },

        // Accent color variants
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },

        // Popover color variants
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },

        // Card color variants
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },

      // Custom font families
      fontFamily: {
        sans: ["var(--font-open-sans)", "var(--font-inter)", "system-ui", "sans-serif"],
        mono: ["var(--font-fira-code)", "monospace"],
      },

      // Custom border radius values
      borderRadius: {
        lg: "var(--radius)", // Large radius
        md: "calc(var(--radius) - 2px)", // Medium radius
        sm: "calc(var(--radius) - 4px)", // Small radius
      },

      // Custom keyframe animations
      keyframes: {
        // Accordion expand animation
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        // Accordion collapse animation
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },

      // Custom animations
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },

      // Typography plugin configuration
      typography: (theme) => ({
        // Inverted (dark mode) typography styles
        invert: {
          css: {
            "--tw-prose-body": theme("colors.medium-gray"),
            "--tw-prose-headings": theme("colors.light-gray"),
            "--tw-prose-lead": theme("colors.medium-gray"),
            "--tw-prose-links": theme("colors.light-gray"),
            "--tw-prose-bold": theme("colors.light-gray"),
            "--tw-prose-counters": theme("colors.medium-gray"),
            "--tw-prose-bullets": theme("colors.medium-gray"),
            "--tw-prose-hr": theme("colors.charcoal"),
            "--tw-prose-quotes": theme("colors.medium-gray"),
            "--tw-prose-quote-borders": theme("colors.charcoal"),
            "--tw-prose-captions": theme("colors.medium-gray"),
            "--tw-prose-code": theme("colors.light-gray"),
            "--tw-prose-pre-code": theme("colors.medium-gray"),
            "--tw-prose-pre-bg": theme("colors.dark-charcoal"),
            "--tw-prose-th-borders": theme("colors.charcoal"),
            "--tw-prose-td-borders": theme("colors.charcoal"),
          },
        },
      }),
    },
  },

  // Tailwind plugins
  plugins: [
    require("tailwindcss-animate"), // Animation utilities
    require("@tailwindcss/typography"), // Typography plugin for prose
  ],
} satisfies Config

export default config
