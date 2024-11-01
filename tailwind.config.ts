import type { Config } from 'tailwindcss';
const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
      },
      boxShadow: {
        // 'custom-shadow': '0 2px 4px rgba(0, 0, 0, 0.2)',
        'custom-shadow': '5px 2px 4px rgba(20, 20, 20, 0.2)',
      },
    },
  },
  plugins: [],
};
export default config;
