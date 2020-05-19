const { resolve, join } = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CleanWebpackPlugin = require("clean-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const isProduction = process.env.NODE_ENV === "production";
const dist = "dist";
const pathsToClean = [`${dist}/*.*`];
const cleanOptions = {
  root: resolve(__dirname, ".."),
  exclude: [`${dist}/.gitignore`],
  verbose: true,
  dry: false,
};
const plugins = [
  new webpack.EnvironmentPlugin({ NODE_ENV: "development" }),
  new CleanWebpackPlugin(pathsToClean, cleanOptions),
  new HtmlWebpackPlugin({
    template: join("client", "index.html"),
    favicon: join("client", "favicon.ico"),
  }),
  new webpack.NamedModulesPlugin(),
];
if (isProduction) {
  plugins.push(new CopyWebpackPlugin([{ from: "client/wp-i.jpg", to: "" }]));
} else {
  plugins.push(new webpack.HotModuleReplacementPlugin());
}
module.exports = plugins;
