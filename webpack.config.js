
var path = require("path");

module.exports = {
  context: __dirname,
  entry: "./frontend/root.jsx",
  output: {
    path: path.resolve(__dirname, 'app', 'assets', 'javascripts'),
    filename: "bundle.js"
  },
  module: {
    rules: [
      {
        test: [/\.jsx?$/, /\.js?$/],
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ['env', 'react', 'es2015']
        }
      }
    ]
  },
  devtool: 'source-map',
  resolve: {
    extensions: [".js", ".jsx", "*"]
  }
};
