/**
 * It’s necessary to install Autoprefixer alongside Tailwind CSS
 * Autoprefixer tracks caniuse.com to see which CSS properties need to be prefixed.
 * Tailwind CSS does not provide any vendor prefixing.
 * PostCSS documentation: https://github.com/postcss/postcss
 *
 */
const tailwindcss = require('tailwindcss');
module.exports = {
	plugins: [
		tailwindcss('./tailwind.js'),
		require('autoprefixer'),
		process.env.NODE_ENV === 'production' &&
			require('@fullhuman/postcss-purgecss')({
				content: ['./src/**/*.{js,jsx}', './dist/index.html'],
				defaultExtractor: (content) => content.match(/[A-Za-z0-9-_:/]+/g) || [],
			}),
	],
};
