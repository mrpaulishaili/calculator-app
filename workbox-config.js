module.exports = {
	globDirectory: 'dist/',
	globPatterns: [
		'**/*.{html,css,js,jpg}'
	],
	swDest: 'dist/sw.js',
	ignoreURLParametersMatching: [
		/^utm_/,
		/^fbclid$/
	]
};