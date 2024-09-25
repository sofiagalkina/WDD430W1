/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}', // This ensures Tailwind looks in your TypeScript and JS files
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};


