const CopyWebpackPlugin = require('copy-webpack-plugin');
const path = require('path');

module.exports = {
  context: path.join(__dirname, 'src'),
  entry: {
    bundle: './scripts/client',
  },
  devtool: 'source-map',
  output: {
    path: path.resolve(path.dirname(), 'build'),
    filename: '[name].js',
  },
  resolve: {
    extensions: ['', '.js', '.scss', '.css'],
  },
  module: {
    loaders: [
      {
        test: /\.js?$/,
        exclude: /(node_modules)/,
        loader: 'babel',
        query: {
          presets: ['es2015'],
        },
      },
      {
        test: /\.scss$/,
        loader: 'style!css!sass',
      },
      {
        test: /\.css$/,
        loader: 'style!css?',
      },
    ],
  },
  plugins: [
    new CopyWebpackPlugin([
      { from: 'index.html' },
    ], {
      copyUnmodified: false,
    }),
  ],
};
