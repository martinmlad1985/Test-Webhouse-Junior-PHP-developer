const path= require('path')
const HTMLWebpackPlugin= require('html-webpack-plugin')
const {CleanWebpackPlugin}= require('clean-webpack-plugin')

module.exports= {
	entry: './src/index.js',
	output: {
		filename: '[name].[contenthash].js',
		path: path.resolve(__dirname, 'docs')
	},
	plugins: [
        new HTMLWebpackPlugin({
        	template: './src/index.html'
        }),
        new CleanWebpackPlugin()
	],
	module: {
		rules: [
         {
         	test: /\.sass$/,
         	use: ['style-loader','css-loader', 'sass-loader']
         },
         {
         	test: /\.png$|\.jpg$/,
         	use: ['file-loader']
         }	
		]
	}
}