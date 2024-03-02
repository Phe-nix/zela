/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      fontFamily: {
        work: ['"Work Sans"', ...defaultTheme.fontFamily.sans],
        mitr: ['"Mitr"', ...defaultTheme.fontFamily.sans],
        chakraPetch: ['"Chakra Petch"', ...defaultTheme.fontFamily.sans],
      },
      keyframes: {
        typing: {
          '0%': {
            width: '0%',
            visibility: 'hidden',
          },
          '100%': {
            width: '100%',
          },
        },
        blink: {
          '50%': {
            borderColor: 'transparent',
          },
          '100%': {
            borderColor: '#3090AA',
          },
        },
      },
      animation: {
        typing: 'typing 6s alternate, blink .7s infinite',
      },
    },
  },
  plugins: [],
}

