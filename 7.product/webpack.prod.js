/**
 * Created by Administrator on 2018/4/5.
 */
const merge = require("webpack-merge");
const UglifyJSPlugin = require("uglifyjs-webpack-plugin");
const common = require("./webpack.common");

module.exports=merge(common,{
    plugins:[
        new UglifyJSPlugin()
    ]
});