const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const webpack = require("webpack");

module.exports = {
    // 번들링 모드
    mode : "production",
    // 번들링 할 대상
    // entry :'./src/index.js',
    entry : {
        // app : "/index.html",
        app : path.resolve(__dirname,"src","index.js"),
    },
    // 번들링 파일
    output : {
        filename : "bundle.js",
        path : path.resolve(__dirname,"dist"),
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
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin(),
        new webpack.ProgressPlugin(),

    ],
    devServer: {
        // contentBase: __dirname + "dist",
        port: 8080,
        hot: false,
        static:{
            directory:path.resolve(__dirname,'dist')
        },
        open: true,
    }

}
