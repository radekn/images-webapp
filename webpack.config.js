"use strict";
const webpack = require("webpack");
const path = require("path");

const resolve = (name) => path.resolve(__dirname, name);

module.exports = {
  context: resolve("src/frontend"),
  entry: {
    main: "./main.tsx",
  },
  output: {
    path: resolve("dist/frontend"),
  },
  resolve: {
    alias: {
      src: resolve("src"),
    },
    modules: [resolve("node_modules")],
    extensions: [".ts", ".tsx", ".mjs", ".js", ".json"],
  },
  module: {
    rules: [
      {
        test: /\.html$/,
        use: ["file-loader?name=[path][name].[ext]"],
      },
      {
        test: /\.scss?$/,
        use: [
          "file-loader?name=[path][name].css",
          "extract-loader",
          "css-loader",
          "sass-loader",
        ],
      },
      {
        test: /\.tsx?$/,
        exclude: resolve("node_modules"),
        use: ["ts-loader"],
      },
    ],
  },
  plugins: [
    new webpack.DefinePlugin({
      API_URL: JSON.stringify(process.env.API_URL || "http://localhost:8000"),
    }),
  ],
  devServer: {
    contentBase: false,
    serveIndex: false,
  },
};
