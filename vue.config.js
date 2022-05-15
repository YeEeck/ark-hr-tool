const { defineConfig } = require("@vue/cli-service");
// const debug = process.env.NODE_ENV !== "production";
// const webpack = require("webpack");
const CompressionWebpackPlugin = require("compression-webpack-plugin");
const productionGzipExtensions = ["js", "css"];
// const path = require("path");

module.exports = defineConfig({
  transpileDependencies: true,
  publicPath: "./",
  productionSourceMap: false, // 生产环境禁用
  configureWebpack: {
    plugins: [
      new CompressionWebpackPlugin({
        //[file] 会被替换成原始资源。[path] 会被替换成原始资源的路径， [query] 会被替换成查询字符串。默认值是 "[path].gz[query]"。
        filename: "[path].gz[query]", // 提示compression-webpack-plugin@3.0.0的话asset改为filename
        //可以是 function(buf, callback) 或者字符串。对于字符串来说依照 zlib 的算法(或者 zopfli 的算法)。默认值是 "gzip"。
        algorithm: "gzip",
        //所有匹配该正则的资源都会被处理。默认值是全部资源。
        test: new RegExp("\\.(" + productionGzipExtensions.join("|") + ")$"),
        //只有大小大于该值的资源会被处理。单位是 bytes。默认值是 0。
        threshold: 10240,
        //只有压缩率小于这个值的资源才会被处理。默认值是 0.8。
        minRatio: 0.8,
      }),
    ],
  },
});
