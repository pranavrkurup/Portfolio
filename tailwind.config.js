/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#F4F1EA",
        primary: "#111111",
        secondary: "#666666",
        accent: "#F44336",
        border: "rgba(0,0,0,0.08)",
        hover: "#FF5A4E",
      },
      fontFamily: {
        sans: ["General Sans", "Inter", "sans-serif"],
        heading: ["Space Grotesk", "sans-serif"],
      },
    },
  },
  plugins: [],
}
