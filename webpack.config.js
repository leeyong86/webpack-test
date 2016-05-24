// webpack.config.js
var ExtractTextPlugin = require("extract-text-webpack-plugin");
module.exports = {
    entry: './main.js',
    output: {
        path: './static',
        publicPath: '/static/',
        filename: 'build.js'
    },
    module: {
        loaders: [
            {
                test: /\.vue$/, // a regex for matching all files that end in `.vue`
                loader: 'vue'   // loader to use for matched files
            },
            {//复制文件
                test: /\.(woff|woff2|eot|ttf|svg)(\?.*$|$)/,
                loader: 'url',
                query:{
                    limit: 1000,
                    name: '[name].[ext]'
                }
            },
            {
                test: /\.(png|jpg|gif)$/,
                loader: 'url',
                query: {
                    // limit for base64 inlining in bytes
                    limit: 10000,
                    // custom naming format if file is larger than
                    // the threshold
                    name: '[name].[ext]'
                }
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel'
            }
        ]
    },
    babel: {
        presets: ['es2015'],
        plugins: ['transform-runtime']
    },
    vue: {
        loaders:{
            css: ExtractTextPlugin.extract("css"),
            // you can also include <style lang="less"> or other langauges
            less: ExtractTextPlugin.extract("css!less")
        }
    },
    plugins: [
        new ExtractTextPlugin("style.css")
    ]

}