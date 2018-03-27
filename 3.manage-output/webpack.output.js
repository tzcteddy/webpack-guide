/**
 * Created by tzc on 2018/3/27.
 */
const path=require("path");
const HtmlWebpackPlugin=require("html-webpack-plugin");
const CleanWebpackPlugin=require("clean-webpack-plugin");

module.exports={
    entry:{   //分离入口
        app:'./3.manage-output/src/index.js',
        print:'./3.manage-output/src/print.js'
    },
    output:{
        filename:"[name].bundle.js",//根据入口起点名称动态生成 bundle 名称
        path:path.resolve(__dirname,'./dist')
    },
    plugins:[
        new CleanWebpackPlugin(['./dist']),//在每次构建前清理 /dist 文件夹
        new HtmlWebpackPlugin({
            title:'管理输出'
        })
    ]
};