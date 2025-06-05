/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          50: "#f0f4fa",
          100: "#d9e2f5",
          200: "#b3c5eb",
          300: "#8da9e0",
          400: "#667cd6",
          500: "#4050cc",
          600: "#3340a7",
          700: "#263385",
          800: "#1a2563",
          900: "#0d1841",
        },
        accent: {
          50: "#fdf8ee",
          100: "#f9eccc",
          200: "#f3d99a",
          300: "#edc669",
          400: "#e7b337",
          500: "#ca9628",
          600: "#a2781f",
          700: "#795a17",
          800: "#513c0e",
          900: "#281e07",
        },
        neutral: {
          50: "#f8f8f8",
          100: "#f0f0f0",
          200: "#e4e4e4",
          300: "#d1d1d1",
          400: "#b4b4b4",
          500: "#9a9a9a",
          600: "#818181",
          700: "#6a6a6a",
          800: "#474747",
          900: "#282828",
        },
      },
      fontFamily: {
        sans: ["Open Sans", "sans-serif"],
        serif: ["Playfair Display", "serif"],
      },
      backgroundImage: {
        "hero-pattern":
          "url('https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')",
      },
    },
  },
  plugins: [],
};
