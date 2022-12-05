/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class",
  theme: {
    extend: {},
  },  
  //Plugins for certain customizations
  plugins: [ require('flowbite/plugin'), require('tailwind-scrollbar-hide')],
}
