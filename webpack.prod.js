const path = require("path");
const { merge } = require("webpack-merge");
const common = require("./webpack.common");
const TerserPlugin = require("terser-webpack-plugin");

module.exports = merge(common, {
  mode: "production",
  devtool: "source-map",
  optimization: {
    splitChunks: {
      // 选择哪些 chunk 进行优化，默认async，即只对动态导入形成的trunk进行优化。
      chunks: "all",
      // 提取chunk最小体积
      minSize: 20000,
      // 要提取的chunk最少被引用次数
      minChunks: 1,
      // 对要提取的trunk进行分组
      cacheGroups: {
        // 匹配node_modules中的三方库，将其打包成一个trunk
        defaultVendors: {
          test: /[\\/]node_modules[\\/]/,
          // trunk名称
          name: "vendors",
          priority: -10,
        },
        default: {
          // 将至少被两个trunk引入的模块提取出来打包成单独trunk
          minChunks: 2,
          name: "default",
          priority: -20,
        },
      },
    },
    minimizer: [
      new TerserPlugin({
        parallel: true,
        terserOptions: {
          sourceMap: true,
        },
      }),
    ],
  },
});
