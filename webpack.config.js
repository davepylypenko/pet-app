const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: './src/index.js',
  devtool: 'inline-source-map',
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "public", "index.html"),
      inject: true
    }),
  ],
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "build"),
  },
  devServer: {
    historyApiFallback: true,
    client: {
      overlay: true,
    },
    static: {
      directory: path.join(__dirname, "build"),
    },
    open: false
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ["babel-loader"],
      },
    ],
  },
  resolve: {
    extensions: ["*", ".js"],
  }
};