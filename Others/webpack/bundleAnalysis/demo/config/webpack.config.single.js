const webpack = require('webpack');
const path = require('path');

module.exports = {
  entry: {
    index: [path.resolve(__dirname, '../src/single/index.js')]
  },
  output: {
    path: path.resolve(__dirname, '../dist/single'),
    filename: '[name].[chunkhash:8].js'
  }
};
