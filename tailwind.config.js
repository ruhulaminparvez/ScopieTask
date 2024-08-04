/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif'],
        'poorRichard': ['"Poor Richard"', 'serif'],
      },
      colors: {
        primary: '#fff',
        secondary: '#EEF2F5',
        tertiary: '#D4E9FF',
        logoColor: '#4285F3',
        btnColor: '#156BCA',
        borderOne: '#E7E7E7',
        lightBlack: '#5C635A',
        lightBlackMain: '#152A16',
      }
    },
  },
  plugins: [],
}

