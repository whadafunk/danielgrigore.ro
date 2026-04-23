import defaultTheme from 'tailwindcss/defaultTheme';

export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        bg: {
          primary: '#0d0d0d',
          surface: '#161616',
          border: '#2a2a2a',
        },
        text: {
          primary: '#f0f0f0',
          secondary: '#888888',
        },
        accent: '#3b82f6',
      },
      fontFamily: {
        sans: ['Inter', ...defaultTheme.fontFamily.sans],
      },
      fontSize: {
        base: '16px',
      },
      lineHeight: {
        relaxed: '1.7',
      },
    },
  },
  plugins: [],
};
