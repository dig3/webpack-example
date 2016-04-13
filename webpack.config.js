var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var HtmlPlugin = require('html-webpack-plugin');

module.exports = {
  context: __dirname + "/src",
  entry: {
    bundle: ["bootstrap-loader", "./index"],
    vendor: [
      "react", "react-dom", "redux", "react-redux", "react-router", "react-router-redux", "jquery"
    ],
  },
  output: {
      path: __dirname + "/dist",
      filename: "[name].[hash].js",
      chunkFilename: "[id].chunk.[hash].js"
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
    new ExtractTextPlugin('styles.css'),
    new webpack.optimize.UglifyJsPlugin(),
    new HtmlPlugin({
      filename: 'index.html',
      template: './index.ejs',
      hash: true
    }),
    new webpack.ProvidePlugin({
      $: "jquery",
      jQuery: "jquery",
      "window.jQuery": "jquery"
    })
  ],
  devtool: 'source-map'
};
