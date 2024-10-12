/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [
    require("daisyui"),
    function ({ addVariant }) {
      addVariant("child", "& > *");
      addVariant("child-hover", "& > *:hover");
    },
  ],
  daisyui: {
    themes: [
      "light",
      "night",
      "dim",
      "emerald",
      "retro",
      "sunset",
      "forest",
      "dark",
    ],
  },
};
