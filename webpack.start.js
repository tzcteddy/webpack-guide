/**
 * Created by tzc on 2018/3/27.
 */
const path=require("path");
const HtmlWebpackPlugin=require("html-webpack-plugin");
module.exports={
    entry:'./1.start/src/index.js',//文件入口
    output:{
        filename:'bundle.js',//文件输出后的文件名
        path:path.resolve(__dirname,'./1.start/dist')//文件输出路径
    },
    plugins:[
        new HtmlWebpackPlugin({  //打包后html文件更新
            title:'起步'
        })
    ]
};