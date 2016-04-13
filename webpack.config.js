var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  context: __dirname + "/src",
  entry: {
    bundle: ["bootstrap-loader", "./index"],
    vendor: [
      "react", "react-dom", "redux", "react-redux", "react-router", "react-router-redux"
    ],
  },
  output: {
      path: __dirname + "/dist",
      filename: "[name].js",
      chunkFilename: "[id].chunk.js"
  },
  module: {
    preLoaders: [{
      test: /\.js$/,
      exclude: /node_modules/,
      loader: "eslint-loader"
    }],
    loaders: [{
      test: /\.js$/,
      exclude: /node_modules/,
      loader: "babel-loader"
    }, {
      test: /\.css$/,
      loader: ExtractTextPlugin.extract("style-loader", "css-loader")
    }, {
      test: /\.scss$/,
      loader: ExtractTextPlugin.extract(
        "style-loader",
        "css-loader!sass-loader"
      )
    }, {
      test: /\.(woff2?|svg)$/,
      loader: "url?limit=10000"
    }, {
      test: /\.(ttf|eot)$/,
      loader: "file"
    }]
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      filename: 'vendor.js'
    }),
    new ExtractTextPlugin('styles.css')
  ],
  devtool: 'source-map'
};
