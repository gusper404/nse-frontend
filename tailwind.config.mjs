import defaultTheme from 'tailwindcss/defaultTheme'

/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			fontFamily: {
        sans: ['Montserrat', ...defaultTheme.fontFamily.sans],
      },
			colors: {
				primary: '#003865',
				secondary: '#005eb8',
				terciary: '#bd9b60',
				text: '#363636',
				danger: '#da343c',
				success: '#00a3e0',
				warning: '#f4b400',
			},
		},
	},
	plugins: [require("daisyui")],
}
