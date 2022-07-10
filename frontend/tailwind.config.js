/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    theme: {
      fontFamily: {
        sans: ['ui-sans-serif', 'system-ui'],
        serif: ['ui-serif', 'Georgia'],
        mono: ['ui-monospace', 'SFMono-Regular'],
        base: ['Fira Sans', 'sans-serif'],
      }
    }
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: ["cupcake", "dark", "emerald", "cmyk", "night"],
  }
}
