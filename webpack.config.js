var debug = process.env.NODE_ENV !== 'production';
var webpack = require('webpack');
var CopyWebpackPlugin = require('copy-webpack-plugin');
var path = require('path');
var pluginsArray = [
  new CopyWebpackPlugin([{
    from: 'index.html'
  }])
];

if (!debug) {
  pluginsArray.push(new webpack.optimize.DedupePlugin());
  pluginsArray.push(new webpack.optimize.OccurenceOrderPlugin());
  pluginsArray.push(new webpack.optimize.UglifyJsPlugin({
    mangle: false,
    sourcemap: false
  }));
}

module.exports = {
  context: path.join(__dirname, 'app'),
  devtool: debug ? 'inline-sourcemap' : null,
  entry: './scripts/client.jsx',
  module: {
    loaders: [{
      test: /\.jsx?$/,
      exclude: /(node_modules|bower_components)/,
      loader: 'babel-loader'
    }]
  },
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'scripts/client.min.js'
  },
  plugins: pluginsArray
};
