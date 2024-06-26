/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "media",
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      padding: {
        "5p": "5%",
      },
      boxShadow: {
        custom: " 0 0px 6px #1688f0, 0 0px 6px #1688f0",
      },
      fontFamily: {
        sans: ["Open Sans", "sans-serif"],
      },
      colors: {
        text: {
          DEFAULT: "#111", // Light mode text
          dark: "#e5e5e5", // Dark mode text
        },
        accent: "#1688f0",
        bg: {
          main: {
            DEFAULT: "#fff", // Light mode background
            dark: "#000", // Dark mode background
          },
          repo: {
            DEFAULT: "#f0f0f0",
            dark: "#0f0f1a",
          },
          user: {
            DEFAULT: "#f5f5f5",
            dark: "#0a0a0f",
          },
        },
        link: {
          DEFAULT: "#f0f0f0", // Light mode link background
          dark: "#0f0f1a", // Dark mode link background
        },
        alt: {
          DEFAULT: "#f5f5f5", // Light mode alternative background
          dark: "#0a0a0f", // Dark mode alternative background
        },
      },
    },
  },
  plugins: [],
};
