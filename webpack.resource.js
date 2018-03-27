/**
 * Created by tzc on 2018/3/27.
 */
const path=require("path");
const HtmlWebpackPlugin=require("html-webpack-plugin");

module.exports={
    entry:'./2.manage-resources/src/index.js',
    output:{
        filename:"bundle.js",
        path:path.resolve(__dirname,'./2.manage-resources/dist')//输出路径如果未找到将会在当前路径新建立文件
    },
    module:{
        rules:[
            {
                test:/\.css$/,
                use:["style-loader","css-loader"]
            },
            {
                test:/\.(png|jpg|gif|svg)$/,
                use:["file-loader"]       //file-loader可以处理图片和字体
            }
        ]
    },
    plugins:[
         new HtmlWebpackPlugin({
             title:'管理资源'
         })
    ]
}