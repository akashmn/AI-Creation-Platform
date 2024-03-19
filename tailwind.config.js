/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'noble-blue-400': '#686B6E',
        'noble-black-700': '#131619',
        'noble-black-800': '#0D0F10',
        'stem-green-500': '#B6F09C',

      },
    },
  },
  plugins: [],
}

