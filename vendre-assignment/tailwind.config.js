const typography = require('@tailwindcss/typography');
const forms = require('@tailwindcss/forms');
const aspectRatio = require('@tailwindcss/aspect-ratio');

module.exports = {
  content: [
    // Example content paths...
    './public/**/*.html',
    './src/**/*.{js,jsx,ts,tsx,vue}',
  ],
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [
    typography,
    forms,
    aspectRatio,
  ],
};
