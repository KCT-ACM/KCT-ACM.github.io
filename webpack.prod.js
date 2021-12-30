const path=require("path");
const common=require('./webpack.common');
const {merge}=require("webpack-merge");
const {CleanWebpackPlugin}=require("clean-webpack-plugin");
const ImageMinimizerPlugin = require("image-minimizer-webpack-plugin");
const { extendDefaultPlugins } = require("svgo");
module.exports=merge(common,{
    mode:'production',
    plugins:[new CleanWebpackPlugin()],
    output:{
        filename:"[name].[hash].js",
        path:path.resolve(__dirname,"dist"),
        assetModuleFilename: "assets/[name][ext][query]"
    },
    optimization: {
        minimizer: [
          "...",
          new ImageMinimizerPlugin({
            minimizer: {
              implementation: ImageMinimizerPlugin.imageminGenerate,
              options: {
                // Lossless optimization with custom option
                // Feel free to experiment with options for better result for you
                plugins: [
                  ["gifsicle", { interlaced: true }],
                  ["jpegtran", { progressive: true }],
                  ["optipng", { optimizationLevel: 10 }]
                ],
              },
            },
          }),
        ],
    }
});