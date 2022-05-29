const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

const webpack = require("webpack");

module.exports = {
    // 번들링 모드
    mode : "development",
    // 번들링 할 대상
    entry : {
        // app : "/index.html",
        router: './router.js',
        app : path.resolve(__dirname,"src","index.js"),
    },
    // 번들링 파일
    output : {
        filename: '[name].js',        path : path.resolve(__dirname,"dist"),        chunkFilename: '[id].[chunkhash].js'

    },
    module: {
        rules: [
            {
                test:/\.html$/, //적용할 정규식
                use:["html-loader"],
            },
            {
                test: /\.css$/,
                use:["css-loader"],
            },
            { test: /\.hbs$/, use: ['handlebars-loader'] }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: 'index.html'
        }),
        new MiniCssExtractPlugin({ filename: 'app.css' }),
        new CleanWebpackPlugin({
            cleanAfterEveryBuildPatterns: ['dist']
        })
    ],
    devServer: {
        // contentBase: __dirname + "dist",
        port: 8080,
        hot: false,
        static:{
            directory:path.resolve(__dirname,'dist')
        },
        open: true,
        historyApiFallback: true
    }

}
