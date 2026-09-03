/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: '#050507',
        primary: '#F5F5F5',
        secondary: '#8B8F98',
        accent: {
          DEFAULT: '#5CC8FF',
          secondary: '#7C6CFF',
        }
      },
      fontFamily: {
        sans: ['Manrope', 'sans-serif'], // Body
        display: ['Sora', 'sans-serif'], // Headings
        mono: ['JetBrains Mono', 'monospace'], // Technical
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      }
    },
  },
  plugins: [],
}
