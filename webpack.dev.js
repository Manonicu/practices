const { resolve } = require("path");
const { merge } = require("webpack-merge");
const common = require("./webpack.common");
const { HotModuleReplacementPlugin, NoEmitOnErrorsPlugin } = require("webpack");

module.exports = () =>
  merge(common, {
    mode: "development",
    devtool: "inline-source-map",
    devServer: {
      contentBase: resolve(__dirname, "./dist"),
      open: true,
      compress: true,
      hot: true,
      port: 8080,
    },
    plugins: [new HotModuleReplacementPlugin(), new NoEmitOnErrorsPlugin()],
  });
