/**
 * Created by tzc on 2018/3/27.
 */

const webpackDevServer = require("webpack-dev-server");
const webpack = require("webpack");

const config = require("./webpack.config.js");
const options = {
    contentBase:'./8.loader/dist',
    hot:true,
    host:'localhost'
};
webpackDevServer.addDevServerEntrypoints(config,options);
const compiler = webpack(config);
const server = new webpackDevServer(compiler,options);
server.listen(5000,function () {
    console.log('listening 5000');
});