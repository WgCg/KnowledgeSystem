const webpack = require('webpack');
const path = require('path')

module.exports = {
  entry: {
    pageA: path.resolve(__dirname, '../src/es6/pageA.js'),
  },
  output: {
    path: path.resolve(__dirname, '../dist/es6'),
    filename: '[name].[chunkhash:8].js'
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      name: 'manifest',
      minChunks: Infinity,
    })
  ]
}