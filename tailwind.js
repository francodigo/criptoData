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
				cyan: '#9cdbff',
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
