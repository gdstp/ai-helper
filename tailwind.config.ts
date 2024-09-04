import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      animation: {
        typewriter: "typewriter 2s steps(11) forwards",
      },
      keyframes: {
        typewriter: {
          to: {
            left: "100%",
          },
        },
      },
      colors: {
        "neutral-00": "#FFFFFF",
        "neutral-01": "#FCFCFC",
        "neutral-02": "#F4F4F4",
        "neutral-03": "#EFEFEF",
        "neutral-04": "#6F767E",
        "neutral-05": "#33383F",
        "neutral-06": "#272B30",
        "neutral-07": "#1A1D1F",
        "neutral-08": "#111315",
        "shade-00": "#9A9FA5",
        "shade-01": "#6F767E",
        "shade-02": "#6F767E66",
        "shade-03": "#11131580",
        "primary-01": "#2A85FF",
        "primary-02": "#83BF6E",
        "primary-03": "#FF6A55",
        "primary-04": "#8E59FF",
        "secondary-01": "#FFBC99",
        "secondary-02": "#CABDFF",
        "secondary-03": "#B1E5FC",
        "secondary-04": "#B5E4CA",
        "secondary-05": "#FFD88D",
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
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
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
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
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
      boxShadow: {
        cBlack: "inset 0 -1px 1px 0 #00000080",
        cWhite: "inset 0 2px 1px 0 #FFFFFF0F",
      },
      dropShadow: {
        grey: "0 4px 8px -4  #00000040",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
export default config;
