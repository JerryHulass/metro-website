/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        customBlue: '#1E5DBC',
      },
    },
  },
  plugins: [],
};
// tailwind.config.js