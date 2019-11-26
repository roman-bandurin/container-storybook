import path from "path";
import webpack from "webpack";
import { CheckerPlugin } from "awesome-typescript-loader";
import { TsconfigPathsPlugin } from "tsconfig-paths-webpack-plugin";

const paths = {
  src: path.resolve(__dirname, "src"),
  dist: path.resolve(__dirname, "dist")
};

const config: webpack.Configuration = {
  context: paths.src,
  mode: "production",
  entry: "../src/index.ts",
  output: {
    path: paths.dist,
    filename: "index.bundle.js"
  },
  devtool: "source-map",
  resolve: {
    extensions: [".webpack.js", ".web.js", ".ts", ".tsx", ".js"],
    plugins: [new TsconfigPathsPlugin()]
  },
  module: {
    rules: [
      { test: /\.js$/, enforce: "pre", use: "source-map-loader" },
      { test: /\.tsx?$/, use: "awesome-typescript-loader" }
    ]
  },
  devServer: {
    contentBase: "./dist",
    // openPage: "index.html",
    index: "index.html",
    open: true,
    compress: true,
    port: 8080
  },
  plugins: [new CheckerPlugin()]
};

export default config;
