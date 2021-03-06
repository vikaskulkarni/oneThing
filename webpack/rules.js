const { join } = require("path");
const rules = [
  {
    test: /.jsx?$/,
    loader: "babel-loader",
    exclude: /node_modules/,
  },
  {
    test: /\.mjs$/,
    include: /node_modules/,
    type: "javascript/auto",
  },
  {
    test: /\.(woff2|woff|ttf|eot|svg)(\?.*$|$)/,
    loader: "file-loader?name=fonts/[name].[ext]",
    include: [join(__dirname, "src"), join(__dirname, "node_modules")],
  },
  {
    test: /\.(ico)$/i,
    loader: "file-loader?name=[name].[ext]",
  },
  {
    test: /\.(jpe?g|png|gif|woff|woff2|eot|ttf|svg)(\?[a-z0-9=.]+)?$/,
    loader: "url-loader?limit=100000",
  },
];
module.exports = rules;
