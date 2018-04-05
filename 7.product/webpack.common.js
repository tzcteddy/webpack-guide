/**
 * Created by Administrator on 2018/4/5.
 */
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CleanWebpackPlugin = require("clean-webpack-plugin");
module.exports={
    entry:{
        app:'./7.product/src/index.js'
    },
    output:{
        filename:'[name].bundle.js',
        path:path.resolve(__dirname,'dist')
    },
    plugins:[
        new CleanWebpackPlugin(['dist'],{
            root:__dirname
        }),
        new HtmlWebpackPlugin({
            title:'构件生产环境'
        })
    ]
}