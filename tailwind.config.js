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
        'noble-black-300': '#9B9C9E',
        'noble-black-400': '#686B6E',
        'noble-black-500': '#363A3D',
        'noble-black-700': '#131619',
        'noble-black-800': '#0D0F10',

        'stem-green-500': '#B6F09C',
      },
      borderWidth:{
      '0': '1.1px',
      '2': '2px',
      '3': '3px',
      '4': '4px',
      '6': '6px',
      '8': '8px',
      }
    },
  },
  plugins: [],
}

