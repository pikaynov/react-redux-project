const path = require("path");
var HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: {
    main: "./src/index.tsx",
  },
  module: {
    rules: [
        {
            test: /\.(ts|js)x?$/,
            use: 'babel-loader',// 'ts-loader',
            exclude: /node_modules/,
            },
        {
            test: /\.html$/,
            use: ["html-loader"]
        },
        {
            test: /\.(svg|png|jpg|gif)$/,
            use: {
            loader: "file-loader",
            options: {
                name: "[name].[hash].[ext]",
                outputPath: "imgs"
            }
            }
        }
    ]
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js', '.css', '.less', 'json'],
    },
};