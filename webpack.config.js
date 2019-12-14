const path = require("path");
const webpackOptions = require("./webpack-options");

module.exports = {
  mode: "development",
  entry: "./entry/client.js",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "public")
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: webpackOptions
        }
      }
    ]
  },
  watch: true,
  watchOptions: {
    ignored: /node_modules/
  }
};
