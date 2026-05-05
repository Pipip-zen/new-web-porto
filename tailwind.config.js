/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        surface: "#121314",
        "surface-dim": "#121314",
        "surface-bright": "#393939",
        "surface-container-lowest": "#0d0e0f",
        "surface-container-low": "#1b1c1c",
        "surface-container": "#212121",
        "surface-container-high": "#2b2b2b",
        "surface-container-highest": "#363636",
        "on-surface": "#ffffff",
        "on-surface-variant": "#c4c7c5",
        outline: "#ffffff",
        "outline-variant": "rgba(255, 255, 255, 0.2)"
      },
      borderWidth: {
        hairline: "1px"
      },
      fontFamily: {
        serif: ["var(--font-newsreader)"],
        mono: ["var(--font-jetbrains-mono)"]
      },
      letterSpacing: {
        editorial: "-0.02em",
        technical: "0.1em"
      },
      spacing: {
        "container-desktop": "3rem",
        "container-mobile": "1.25rem",
        "section-gap": "7.5rem"
      }
    }
  },
  plugins: []
};
