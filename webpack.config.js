var webpack = require('webpack');

module.exports = {
  context: __dirname + "/src",
  entry: {
    bundle: "./index",
    vendor: ["react", "react-dom"]
  },
  output: {
      path: __dirname + "/dist",
      filename: "[name].js"
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
      loaders: ["style-loader", "css-loader"]
    }, {
      test: /\.scss$/,
      loaders: ["style-loader", "css-loader", "sass-loader"]
    }]
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      filename: 'vendor.js'
    })
  ]
};
