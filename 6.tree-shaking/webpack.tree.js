/**
 * Created by tzc on 2018/3/27.
 */
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CleanWebpackPlugin = require("clean-webpack-plugin");
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');

module.exports={
    entry:{
        app:'./6.tree-shaking/src/index.js',//相对webpack.config.js的路径
        math:'./6.tree-shaking/src/math.js',
    },
    output:{
        filename:'[name].bundle.js',
        path:path.resolve(__dirname,'./dist') //绝对路径
    },
    devServer:{
      contentBase:path.resolve(__dirname,'./dist') //绝对路径（建议使用）
    },
    plugins:[
        new CleanWebpackPlugin(['./dist']),
        new HtmlWebpackPlugin({
            title:'tree-shaking'
        }),
        new UglifyJSPlugin()
    ]
};