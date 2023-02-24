const path = require('path')
const webpack = require('webpack')
require('dotenv').config()

module.exports = {
  entry: ['./client/index.js'],
  output: {
    path: path.join(__dirname, '..', 'server', 'public'),
    filename: 'bundle.js',
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.REACT_APP_AUTH_URL': JSON.stringify(
        process.env.REACT_APP_AUTH_URL
      ),
    }),
  ],
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.(j|t)sx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx'],
  },
  devtool: 'source-map',
}
