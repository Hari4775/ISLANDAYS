/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: 'class',

  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', '-apple-system', 'Helvetica', 'Arial', 'sans-serif'],
        code: ['source-code-pro', 'Menlo', 'Monaco', 'Consolas', 'Courier New', 'monospace'],
      },
    },
  },
  plugins: [],
}

