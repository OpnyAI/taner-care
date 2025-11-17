/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#1CB5B1", // Türkis
        bgLight: "#F2F4F5", // Hellgrau
        grayMid: "#80898F", // Mittelgrau
        textDark: "#2B2F33", // Anthrazit/Schrift
      },
      container: {
        center: true,
        padding: "1.5rem",
      },
      borderRadius: {
        xl: "1rem",
        "2xl": "1.5rem",
      },
      boxShadow: {
        soft: "0 8px 24px rgba(0,0,0,0.04)",
      },
    },
  },
  plugins: [],
};
