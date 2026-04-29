import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        bg: "var(--color-bg)",
        fg: "var(--color-fg)",
        muted: "var(--color-muted)",
        surface: "var(--color-surface)",
        border: "var(--color-border)",
        cta: "var(--color-cta)",
        "cta-dark": "var(--color-cta-dark)",
        accent: "var(--color-accent)",
      },
      fontFamily: {
        heading: "var(--font-heading)",
        body: "var(--font-body)",
      },
      boxShadow: {
        card: "0 24px 60px rgba(17, 17, 17, 0.08)",
        lift: "0 18px 44px rgba(230, 30, 43, 0.16)",
      },
      borderRadius: {
        xl2: "1.5rem",
        xl3: "2rem",
      },
      maxWidth: {
        content: "78rem",
      },
      backgroundImage: {
        "hero-grid":
          "linear-gradient(to right, rgba(17,17,17,0.06) 1px, transparent 1px), linear-gradient(to bottom, rgba(17,17,17,0.06) 1px, transparent 1px)",
      },
    },
  },
  plugins: [],
};

export default config;
