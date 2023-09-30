/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  // add daisyUI plugin
  plugins: [require("daisyui")],
  daisyui: {
    themes: ["light", "dark", "cupcake"],
  },
};
