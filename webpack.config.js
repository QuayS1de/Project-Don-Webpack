const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
    entry: {
        main: './src/index.js'
    },
    output: {
        filename: '[name].[contenthash].js', //Имя файла, которое будет присваиваться скрипту после сборки. [name].[contenthash].js - уникальное хэшированное имя
        path: path.resolve(__dirname, 'dist')
    },
    devServer: {
        port: 8000
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, 'src/index.html')
        }),
        new CleanWebpackPlugin(),
        // new webpack.ProvidePlugin({ //импорт jquery 
        //     $: 'jquery',
        //     jQuery: 'jquery'
        // }),
    ],
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: ["style-loader", "css-loader"]
            },
            {
                test: /\.s[ac]ss$/i,
                use: ["style-loader", "css-loader", "sass-loader"]
            },
            {
                test: /\.(png|jpe?g|gif|svg)$/i, //если нужно обработать ещё какие-то файлы, то можно добавить в этот список
                use: [
                    {
                      loader: 'file-loader'
                    },
                ]
            },
        ]
    },
}