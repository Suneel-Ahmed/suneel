/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./src/pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/components/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/app/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
		extend: {
			fontFamily: {
				inter: ['Inter', 'sans-serif'],
				leagueSpartan: ['LeagueSpartan', 'sans-serif'],
				hvdTrialGraphit: ['HvDTrialGraphit', 'sans-serif'],
				poppins: ['Poppins', 'sans-serif'],
			},
			screens: {
				'3xl': '1920px',
			}
		},
	},
	plugins: [],
};
