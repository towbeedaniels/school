// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        heading: ['Poppins', 'sans-serif'],
      },
      colors: {
        primary: {
          50: '#eff6ff',
          100: '#dbeafe',
          200: '#bfdbfe',
          300: '#93c5fd',
          400: '#60a5fa',
          500: '#3b82f6',
          600: '#2563eb',
          700: '#1d4ed8',
          800: '#1e40af',
          900: '#1e3a8a',
        },
      },
      fontSize: {
        'xs': ['0.75rem', { lineHeight: '1.5', fontWeight: '400' }],
        'sm': ['0.875rem', { lineHeight: '1.6', fontWeight: '400' }],
        'base': ['1rem', { lineHeight: '1.7', fontWeight: '400' }],
        'lg': ['1.125rem', { lineHeight: '1.7', fontWeight: '500' }],
        'xl': ['1.25rem', { lineHeight: '1.7', fontWeight: '600' }],
        '2xl': ['1.5rem', { lineHeight: '1.4', fontWeight: '700' }],
        '3xl': ['1.875rem', { lineHeight: '1.3', fontWeight: '700' }],
        '4xl': ['2.25rem', { lineHeight: '1.2', fontWeight: '800' }],
        '5xl': ['3rem', { lineHeight: '1.1', fontWeight: '800' }],
      },
    },
  },
  plugins: [],
}