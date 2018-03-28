/**
 * Created by tzc on 2018/3/27.
 */
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CleanWebpackPlugin = require("clean-webpack-plugin");
const webpack = require("webpack");

module.exports = {
    entry:{
        app:'./5.hmr/src/index.js'
    },
    output:{
        filename:'[name].bundle.js',
        path:path.resolve(__dirname,'./dist')
    },
    devtool:'inline-source-map',
    devServer:{
      contentBase:path.resolve(__dirname,'./dist'),
        //热模块更新
      hot:true
    },
    module:{
      rules:[
          {
              test:/\.css$/,
              use:['style-loader','css-loader']
          }
      ]
    },
    plugins:[
        new CleanWebpackPlugin(['dist'],{
          root:__dirname
        }),
        new HtmlWebpackPlugin({
            title:'模块热替换'
        }),
        //以便更容易查看要修补(patch)的依赖
        new webpack.NamedModulesPlugin(),
        new webpack.HotModuleReplacementPlugin()
    ]
};