/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#4F46E5',
          dark: '#4338CA',
          light: '#EEF2FF',
        },
        ink: '#111827',
        muted: '#6B7280',
        surface: {
          dark: '#0F0F1A',
          card: '#1A1A2E',
        },
      },
    },
  },
  plugins: [],
}
