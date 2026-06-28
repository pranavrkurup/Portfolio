/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#F5F4F1",
        primary: "#111111",
        secondary: "#888880",
        "accent-red": "#D4552A",
        "accent-blue": "#2A4DD4",
        border: "rgba(17, 17, 17, 0.08)",
      },
      fontFamily: {
        sans: ["'DM Sans'", "sans-serif"],
        heading: ["'Bricolage Grotesque'", "sans-serif"],
        mono: ["'DM Mono'", "monospace"],
      },
    },
  },
  plugins: [],
}
