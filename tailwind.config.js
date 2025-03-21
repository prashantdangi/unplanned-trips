/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#79c4f2',
        // Add other matching colors as needed
      },
    },
  },
  plugins: [],
};
