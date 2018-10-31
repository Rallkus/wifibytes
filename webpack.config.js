const path = require('path');
const webpack = require('webpack');
const PostCompile = require('post-compile-webpack-plugin');

module.exports = {
  context: path.join(__dirname, 'src'),
  entry: [
    './index.js',
    'webpack/hot/dev-server',
    'webpack-dev-server/client?http://localhost:8080/',
  ],
  output: {
    path: path.join(__dirname, 'www'),
    filename: 'main.js',
    publicPath: '/',
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),

    new PostCompile(() => {
      console.log('Your app is running at http://localhost:8080')
    }),
  ],
};