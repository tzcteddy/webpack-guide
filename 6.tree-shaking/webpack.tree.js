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
        new CleanWebpackPlugin(['dist'],{
            root:__dirname,//一根根的绝对路径（webpack.config）
            //verbose:true,//一个根的绝对路径
            //dry:false, // 不要删除任何东西，主要用于测试.
           // "exclude": ["files","to","ignore"]//排除不删除的目录，主要用于避免删除公用的文件
        }),
        new HtmlWebpackPlugin({
            title:'tree-shaking'
        }),
        new UglifyJSPlugin()
    ]
};