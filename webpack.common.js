const path = require("path");
var HtmlWebpackPlugin = require("html-webpack-plugin");
const rootDir = path.resolve(__dirname, './');

module.exports = {
  entry: {
    main: "./src/index.tsx",
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', 'jsx', '.css', '.json'],
    alias: {
        src: path.resolve(rootDir, 'src'),
    }
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
};