const path = require('path');
const nodeExternals = require('webpack-node-externals');

module.exports = {
	target: 'node',
	mode: 'development',
	entry: './src/index.js',
	externals: [nodeExternals({
		modulesDir: 'node_modules'
	})], // in order to ignore all modules in node_modules folder 
	devtool: 'inline-source-map',
	output: {
		filename: 'server.js',
		path: path.resolve(__dirname, 'build')
	},
	module: {
		rules: [
			{
				test: /\.js?$/,
				exclude: /node_modules/,
				loader: "babel-loader",
				options: {
					presets: [
						[
							'@babel/preset-env',
							{
								targets: {
									node: true
								}
							}
						]
					],
					// "plugins": ["@babel/plugin-transform-runtime"],
					"sourceType": "unambiguous"
				}
			}
		]
	}
};