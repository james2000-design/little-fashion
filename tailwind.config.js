/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "dark-color": "#000000",
      },
      backgroundImage: {
        "gradient-to-top-dark":
          "linear-gradient(to top, var(--dark-color), transparent 90%)",
      },
    },
  },
  plugins: [],
};
