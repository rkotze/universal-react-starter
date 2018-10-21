const path = require("path");

module.exports = {
  mode: "production",
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
          options: {
            presets: ["react", "env", "stage-1"]
          }
        }
      }
    ]
  }
};
