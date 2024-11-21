import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
				sm: '640px', // Mobile
				lg: '1024px',  // Web
			},
      colors: {
				background: {
					paper: '#1C1C1E', default: '#2C2C2E'
				},
				primary: {
					main: '#3D63DD', light: '#CBA5D1', dark: '#ABC2E5', contrasttext: '#ffffff',
				},
				text: {
					primary: '#F5F5F5', secondary: '#C1BFBF', disabled: '#4A4A4A',
				},
			},
    },
  },
  plugins: [],
} satisfies Config;
