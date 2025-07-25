const config = {
  darkMode: ["class"],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        GREY: "var(--yellow)",
        WHITE: "var(--yellow)",
        BLACK: "var(--yellow)",
        YELLOW: "var(--yellow)",
      },
      fontFamily: {
        primary: ["Inter", "sans-serif"],
        secondary: "Dosis",
      },
      container: {
        center: true,
        padding: "2rem",
        screens: {
          lg: "1200px",
          maxLg2: { max: "1299px" },
        },
      },
    },
  },
};
export default config;
