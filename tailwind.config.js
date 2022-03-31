const defaultTheme = require('tailwindcss/defaultTheme')
const colors = require('tailwindcss/colors');

/** @type {import("@types/tailwindcss/tailwind-config").TailwindConfig } */
module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Open Sans"', ...defaultTheme.fontFamily.sans],
        mono: ['"Nanum Gothic Coding"', ...defaultTheme.fontFamily.mono]
      },
      colors: {
        black: {
          DEFAULT: "#000",
          900: "#050505",
          800: "#0B0B0B",
          700: "#111",
          600: "#161616",
          500: "#1C1C1C",
          400: "#222",
          300: "#272727",
          200: "#2D2D2D",
          100: "#333",
          50: "#383838"
        },
        gray: colors.trueGray
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
    require('@tailwindcss/line-clamp'),
    require('@tailwindcss/aspect-ratio'),
  ],
}
