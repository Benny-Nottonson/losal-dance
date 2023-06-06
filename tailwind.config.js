/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./components/**/*.{js,ts,jsx,tsx,mdx}",
		"./app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			backgroundImage: {
				"gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
				"gradient-conic":
					"conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
			},
		},
		colors: {
			'light': '#adc0dd',
			'white': '#fff',
			'dark': '#241a76',
			'primary': '#be013a',
			'secondary': '#cd64a0',
			'info': '#ac3fa5',
			'success': '#5ca001',
			'warning': '#ffbe67',
			'danger': '#f00066',
		}
	},
	plugins: [],
};
