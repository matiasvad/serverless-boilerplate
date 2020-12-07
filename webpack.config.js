const path = require('path');
const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
	entry: {
		'app.functions/index': './src/app.functions/index.js',
	},
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: '[name].bundle.js',
	},
	plugins: [
		new CopyPlugin({
			patterns: [
				{ from: './src/app.functions', to: 'app.functions', toType: 'dir' },
			],
		}),
	],
};