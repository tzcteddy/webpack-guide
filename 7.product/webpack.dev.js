/**
 * Created by Administrator on 2018/4/5.
 */
const path = require("path");
 const merge = require("webpack-merge");
const common = require("./webpack.common");

module.exports=merge(common,{
    devtool:"inline-source-map",
    devServer:{
        contentBase:path.resolve(__dirname,'dist')
    }
})