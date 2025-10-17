const colors = require('tailwindcss/colors');

/**
 * Tailwind configuration with dark mode support and CSS variables for dynamic themes.
 */
module.exports = {
  content: [
    './src/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}'
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: 'var(--color-primary)',
        secondary: 'var(--color-secondary)',
        accent: 'var(--color-accent)'
      }
    }
  },
  plugins: []
};
