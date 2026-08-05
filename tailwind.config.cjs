const plugin = require('tailwindcss/plugin');

function withOpacity(variable) {
  return ({ opacityValue }) => {
    if (opacityValue === undefined) {
      return `rgb(var(${variable}))`;
    }
    return `rgb(var(${variable}) / ${opacityValue})`;
  };
}

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}', './app/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        background: withOpacity('--rgb-background'),
        foreground: withOpacity('--rgb-foreground'),
        accent: withOpacity('--rgb-accent'),
        'accent-2': withOpacity('--rgb-accent-2'),
        border: withOpacity('--rgb-border'),
        surface: withOpacity('--rgb-foreground'),
        muted: withOpacity('--rgb-foreground'),
      },
      boxShadow: {
        sm: '0 8px 30px -10px rgba(11,6,24,0.6)',
      },
    },
  },
  plugins: [
    plugin(function ({ addUtilities }) {
      addUtilities({
        '.munx-glass': { 'background': 'var(--glass-bg)', 'border': '1px solid var(--glass-border)', 'backdrop-filter': 'blur(var(--glass-blur))' },
      });
    }),
  ],
};
