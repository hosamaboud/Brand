/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        xsm: "375px",
      },
      colors: {
        bodyColor: "var(--c-bg)",
        bg_card: "var(--c-divider)",
        text_card: "var(--c-bg-elv)",
        item_color: "var(--c-bg-alt)",
        border_color: "var(--c-border)",
        primary: "#fea928",
        border_hover: "var(--c-border-hover)",
        text_color: "var(--c-text-1)",
        text_color_alt: "var(--c-text-2)",
        text_color_hover: "var(--c-text-3)",
        violet_color: "var(--cv-violet)",
        green_color: "var(--cv-green)",
        orange_color: "var(--cv-orange)",
        yellow_color: "var(--cv-yellow)",
        bg_testimonial_color: "var(--cv-primary)",
        bg_hover: "var(--cv-bg-testimonial)",
        bg_item: "var(--cv-bg-item)",
        bg_policy: "var(--cv-bg-Policy)",
        bg_scroll: "var(--c-scrollbar-bg)",
        bg_productItem: "var(--cv-bg-productItem)",
      },
      container: {
        center: true,
        padding: {
          DEFAULT: "1rem",
          sm: "2rem",
          lg: "4rem",
          xl: "5rem",
          "2xl": "8rem",
        },
      },
      boxShadow: {
        "custom-light": "0 4px 10px rgba(0, 0, 0, 0.1)",
        "custom-dark": "0 6px 20px rgba(0, 0, 0, 0.2)", 
        "custom-glow":"var(--c-shadow-soft)",
      },
    },
  },
  darkMode: "class",
  plugins: [],
};
