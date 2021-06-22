const glob = require("glob");
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const views = glob.sync(path.resolve(__dirname, "src/views/**/index.js"));
const entries = {};
const plugins = [];

views.map((page) => {
  const { dir } = path.parse(page);
  const name = dir.split("/").slice(-1)[0];
  entries[name] = page;

  plugins.push(
    new HtmlWebpackPlugin({
      inject: true,
      hash: true,
      filename: `${name}.html`,
      template: `${dir}/index.html`,
      chunks: ["commons", "vendor", "manifest", name],
      xhtml: true,
      minify: {
        removeComments: true,
        collapseWhitespace: true,
        removeAttributeQuotes: true,
      },
    })
  );
});

module.exports = {
  entries,
  pages: Object.keys(entries),
  plugins,
};
