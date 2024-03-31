import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    container: {
      padding: '2rem',
      center: true,
    },
    extend: {
      colors: {
        lightGray: '#f5f5f7',
        gray: '#A6A8AA',
        dark: '#131314',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
    fontFamily: {
      sans: ['var(--font-satoshi)'],
    },
  },
  plugins: [require('tailwindcss-fluid-type')],
};
export default config;
