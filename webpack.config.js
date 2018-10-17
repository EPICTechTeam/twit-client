const path = require('path')
const webpack = require('webpack')

const config = {
	context: path.resolve('./src'),
	devtool: 'eval',
	entry: { app: 'index.jsx' },
	module: {
		rules: [{
			test: /\.jsx?$/,
			exclude: /node_modules/,
			loader: 'babel-loader'
		}]
	},
	output: {
		filename: '[name].js',
		path: path.resolve('./build')
	},
	plugins: [new webpack.NoEmitOnErrorsPlugin()],
	resolve: {
		extensions: ['.js', '.jsx'],
		modules: [
			path.resolve('./src'),
			'node_modules'
		]
	},
	target: 'web'
}

module.exports = config
