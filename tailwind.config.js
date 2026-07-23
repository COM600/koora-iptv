/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#e11d48", // A nice red/pink color similar to Nitro/Koora styles
        secondary: "#1e293b",
      }
    },
  },
  plugins: [],
}
