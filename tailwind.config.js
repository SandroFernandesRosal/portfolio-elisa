/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },

      blur: {
        full: '160px',
      },
      keyframes: {
        slidemov: {
          '0%': { transform: 'translateX(0vw)' },
          '100%': { transform: 'translateX(100vw)' },
        },
      },
      animation: {
        slidemov: 'slidemov 2s linear',
      },
    },
  },
  plugins: [],
}
