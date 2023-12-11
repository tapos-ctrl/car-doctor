/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary-color':'#FF3811',
        'section-title-one':'#FF3811',
        'section-title-two':'#151515',
        'section-paragraph':'#737373'
      }
    },
  },
  plugins: [require("daisyui")],
}

