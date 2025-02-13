/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}", // Ensures Tailwind scans all your React files
  ],
  theme: {
    extend: {
      colors: {
        primary: "#1d4ed8", // Blue
        secondary: "#64748b", // Gray
        accent: "#22c55e", // Green
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
      },
    },
  },
  plugins: [],
}
