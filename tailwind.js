module.exports = {
	important: true,
	theme: {
		container: {
			center: true,
		},
		fontFamily: {
			body: ['Poppins', 'sans-serif'],
		},
		extend: {
			colors: {
				yellow: '#FFF159',
				grey_500: '#555555'
			},
			margin: {
				'96': '24rem',
				'128': '32rem',
			},
		},
	},
	variants: {
		opacity: ['responsive', 'hover'],
		tableLayout: ['responsive', 'hover', 'focus'],
	},
	purge: [
		'./src/**/*.html',
		'./src/**/*.vue',
		'./src/**/*.jsx',
	],
};
