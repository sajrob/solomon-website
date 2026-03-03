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
        industrial: {
          slate: "#0A0F1C", // Darker, colder background
          gray: "#1E293B",  // Structural elements
          blue: "#3B82F6",  // Primary Action / Info
          emerald: "#10B981", // Success / System Operational
          amber: "#F59E0B",  // Warning / Attention
          red: "#EF4444",    // Critical Error
          white: "#F8FAFC",  // Primary Text
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)"],
        mono: ["var(--font-jetbrains-mono)"],
      },
      backgroundImage: {
        'grid-pattern': "linear-gradient(to right, rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.03) 1px, transparent 1px)",
      },
    },
  },
  plugins: [],
};

export default config;
