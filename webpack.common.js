const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const OptimizeCssAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin");
const { DefinePlugin } = require("webpack");
const { entries, plugins, pages } = require("./utils");

module.exports = {
  entry: entries,
  output: {
    path: path.resolve(__dirname, "./dist"),
    filename: "[name].bundle.js",
    chunkFilename: "[contenthash:10].chunk.js",
    clean: true,
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
    extensions: [".js", ".css"],
    fallback: {
      dgram: false,
      path: false,
      fs: false,
      net: false,
      tls: false,
      child_process: false,
      // stream: require.resolve('stream-browserify'),
      // tty: require.resolve('tty-browserify'),
      // crypto: require.resolve('crypto-browserify'),
    },
  },
  module: {
    rules: [
      {
        test: /\.(scss|css)$/,
        use: [
          "style-loader",
          "css-loader",
          {
            loader: "postcss-loader",
            options: {
              postcssOptions: {
                ident: "postcss",
                plugins: [require("postcss-preset-env")()],
              },
            },
          },
          "sass-loader",
        ],
      },
      {
        test: /\.js$/,
        // 注意需要在package.json配置browserslist，否则babel-loader不生效
        // js兼容处理 babel
        loader: "babel-loader", // 规则只使用一个loader时推荐写法
      },
      {
        test: /\.(eot|svg|ttf|woff|)$/,
        type: "asset/resource",
        generator: {
          // 输出文件位置以及文件名
          filename: "fonts/[name][ext]",
        },
      },
      {
        //处理图片资源
        test: /\.(jpg|png|gif|)$/,
        type: "asset",
        generator: {
          // 输出文件位置以及文件名
          filename: "images/[name][ext]",
        },
        parser: {
          dataUrlCondition: {
            maxSize: 10 * 1024, //超过10kb不转base64
          },
        },
      },
    ],
  },
  plugins: [
    new DefinePlugin({
      PAGES: JSON.stringify(pages),
    }),
    new CleanWebpackPlugin(),
    ...plugins,
    new MiniCssExtractPlugin(),
    new OptimizeCssAssetsPlugin(),
    new CopyPlugin({
      patterns: [
        {
          from: path.resolve(__dirname, "src/assets"),
          to: path.resolve(__dirname, "dist"),
        },
      ],
    }),
  ],
};
