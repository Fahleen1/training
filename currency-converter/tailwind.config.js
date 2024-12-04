/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'custom-gray': '#6b7280',
        'custom-black': '#09090b',
      },
    },
  },
  plugins: [],
};
