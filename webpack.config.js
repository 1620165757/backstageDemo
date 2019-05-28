const path = require('path');
//创建一个全新得index.html
const HtmlWebpackPlugin = require('html-webpack-plugin');
//清理dist文件
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
    entry: {
        app: './web/index.js'
    },
    //错误追踪
    devtool: 'inline-source-map',
    //web服务器
    devServer: {
        contentBase: './dist'
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Output Management',
            template: './web/index.html',
        })
    ],
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    module: {
        rules: [{
            test: /\.js$/,
            loader: 'babel-loader',
            exclude: /node_modules/,
            query: {
                presets: ['react', 'es2015'],
            }
        }]
    }
};
