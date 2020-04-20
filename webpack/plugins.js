const { resolve, join } = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const CleanWebpackPlugin = require("clean-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const LodashModuleReplacementPlugin = require("lodash-webpack-plugin");
const isProduction = process.env.NODE_ENV === "production";
const dist = "dist";
const pathsToClean = [`${dist}/*.*`];
const cleanOptions = {
  root: resolve(__dirname, ".."),
  exclude: [`${dist}/.gitignore`],
  verbose: true,
  dry: false
};
const plugins = [
  new webpack.EnvironmentPlugin({ NODE_ENV: "development" }),
  new CleanWebpackPlugin(pathsToClean, cleanOptions),
  new LodashModuleReplacementPlugin(),
  new HtmlWebpackPlugin({
    template: join("client", "index.html"),
    favicon: join("client", "favicon.ico")
  }),
  new webpack.optimize.CommonsChunkPlugin({
    name: "vendor",
    minChunks: Infinity
  }),
  new webpack.NamedModulesPlugin()
];
if (isProduction) {
  plugins.push(
    new CopyWebpackPlugin([{ from: "client/wp-i.jpg", to: "" }]),
    new webpack.LoaderOptionsPlugin({
      minimize: true,
      debug: false
    })
  );
} else {
  plugins.push(
    new webpack.LoaderOptionsPlugin({
      debug: true
    }),
    new webpack.HotModuleReplacementPlugin()
  );
}
module.exports = plugins;
