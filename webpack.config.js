/*

Webpack configuration.

Author: Robin Bürkli <robuba.jr@gmx.ch>

*/

const path = require('path');
module.exports = {
  mode: 'development',
  entry: './src/index.js',
  output: {
    path: __dirname + '/build',
    filename: 'bundle.js',
  },
  devServer: {
    // This path will be served
    static: path.join(__dirname, 'build'),
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
          },
        },
      },
    ],
  },
};
