/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          primary: "#0DCEB3",
          secondary: "#F4E7D3",
        },
        text: {
          primary: "#1A1A1A",
          secondary: "#404040",
        },
        surface: {
          DEFAULT: "#FFFFFF",
          alt: "#FAFAFA",
        },
        error: "#D32F2F",
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
        headline: ["Recoleta", "serif"],
      },
      fontSize: {
        xs: "12px",
        sm: "14px",
        md: "16px",
        lg: "20px",
        xl: "24px",
      },
      borderRadius: {
        sm: "4px",
        md: "8px",
        lg: "16px",
      },
      boxShadow: {
        "elevation-1": "0 1px 2px rgba(0,0,0,0.04)",
        "elevation-2": "0 2px 4px rgba(0,0,0,0.06)",
      },
      spacing: {
        xs: "4px",
        sm: "8px",
        md: "16px",
        lg: "24px",
        xl: "32px",
      },
      screens: {
        xs: "0px",
        sm: "480px",
        md: "768px",
        lg: "1024px",
      },
    },
  },
  plugins: [],
};
