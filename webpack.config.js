const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: process.env.NODE_ENV,
  entry: {
    src: "./client/index.js",
  },
  output: {
    path: path.resolve(__dirname, "build"),
    filename: "bundle.js",
    publicPath: "/",
    clean: true,
  },
  devtool: "eval-source-map",
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: "babel-loader",
        options: {
          presets: ["@babel/preset-env", "@babel/preset-react"],
        },
      },
      {
        test: /\.scss$/,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: "asset/resource",
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "Development",
      template: path.resolve(__dirname, "./client/index.html"),
    }),
  ],
  devServer: {
    static: {
      directory: path.resolve(__dirname, "build"),
    },
    port: 8080,
    historyApiFallback: true,
    proxy: {
      "/": "http://localhost:3000",
    },
  },
};
