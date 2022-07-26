const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const path = require('path');

module.exports = {

    entry: './src/js/index.js',

    output: {
        // publicPath: '/',
        path: path.resolve(__dirname, 'dist'),
        filename: 'js/main.js',
    },

    module: {
        rules: [
          {
            test: /\.(sass|css|scss)$/,
            use: [
              // Creates `style` nodes from JS strings
              MiniCssExtractPlugin.loader,
              // {
              //   loader: MiniCssExtractPlugin.loader,
              //   options: {
              //     publicPath: '../'
              //   }
              // },
              // Translates CSS into CommonJS
              "css-loader",
              // Compiles Sass to CSS
              "sass-loader",
            ],
          },
          {
            test: /\.(png|jpe?g|gif)$/i,
            use: [
              {
                loader: 'file-loader',
                options: {
                name: '[name].[ext]',
                outputPath: "images",
                },
              },
            ],
          },
          {
            test: /\.(svg|woff|woff2|ttf|eot)$/,
            use: [
              {
                loader: 'file-loader',
                options: {
                name: '[name].[ext]',
                outputPath: "fonts", 
                },
              },
            ],
          },
          {
            test: /\.html$/i,
            loader: "html-loader",
          },
          {
            test: require.resolve("jquery"),
            loader: "expose-loader",
            options: {
              exposes: ["$", "jQuery"],
            },
          },
        ],
    },

    devServer: {
      static: {
        directory: path.join(__dirname, "dist")
      },
        // compress: true,
        port: 1238,
        devMiddleware: {
          writeToDisk: true,
        },
        // stats: 'errors-only',
        open: true
    },
    plugins: [
        new HtmlWebpackPlugin({
        template: './src/index.html',
        filename: 'index.html',
        }),
        new HtmlWebpackPlugin({
          template: './src/projects.html',
          filename: 'projects.html',
        }),

        new MiniCssExtractPlugin({
            filename: 'css/style.css',
        }),
    ],
};