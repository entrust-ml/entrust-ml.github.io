import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: [
          '-apple-system',
          'BlinkMacSystemFont',
          'SF Pro Text',
          'SF Pro Icons',
          'Helvetica Neue',
          'Helvetica',
          'Arial',
          'sans-serif',
        ],
        display: [
          'SF Pro Display',
          '-apple-system',
          'BlinkMacSystemFont',
          'Helvetica Neue',
          'sans-serif',
        ],
      },
      colors: {
        'apple-gray': {
          50: '#fbfbfd',
          100: '#f5f5f7',
          200: '#e8e8ed',
          300: '#d2d2d7',
          400: '#86868b',
          500: '#6e6e73',
          600: '#424245',
          700: '#1d1d1f',
          800: '#131314',
          900: '#000000',
        },
        'entrust': {
          purple: '#723988',
          magenta: '#a61f8c',
        },
        'tag-purple': '#8b5cf6',
        'tag-blue': '#0ea5e9',
        'tag-navy': '#1e40af',
        'tag-green': '#22c55e',
        'tag-orange': '#f97316',
      },
      typography: {
        DEFAULT: {
          css: {
            maxWidth: 'none',
            color: '#1d1d1f',
            a: {
              color: '#0066cc',
              textDecoration: 'none',
              '&:hover': {
                textDecoration: 'underline',
              },
            },
            'code::before': {
              content: '""',
            },
            'code::after': {
              content: '""',
            },
          },
        },
      },
    },
  },
  plugins: [],
};

export default config;
