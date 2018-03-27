/**
 * Created by tzc on 2018/3/27.
 */
const path=require("path");
const HtmlWebpackPlugin=require("html-webpack-plugin");
const CleanWebpackPlugin=require("clean-webpack-plugin");

module.exports={
    entry:'./4.develop/src/index.js',
    output:{
        filename:'bundle.js',
        path:path.resolve(__dirname,'./dist')
    },
    devtool:'inline-source-map',      //将编译后的代码映射回原始源代码,如果一个错误来自print.js，会明确指出
    devServer:{  //提供了一个简单的 web 服务器，并且能够实时重新加载  package配置"server": "webpack-dev-server --open",
        contentBase:path.resolve(__dirname,'./dist'),//你要提供哪里的内容给虚拟服务器用。这里最好填 绝对路径。
        host:'localhost',//主机名
        port:'8080',//端口
        open:true,  //true:自动打开浏览器
        compress:true, //true:开启虚拟服务器时，为你的代码进行压缩。加快开发流程和优化的作用
        hot:true,//热模块更新作用
        historyApiFallback:true,//boolean or object
        /**
        * 如果为 true ，在浏览器上全屏显示编译的errors或warnings。默认 false （关闭）
        * 如果你只想看 error ，不想看 warning。
        */
        overlay:{
            errors:true,
            warning:false
        },
        quiet:true,//true，则终端输出的只有初始启动信息。 webpack 的警告和错误是不输出到终端的
        publicPath:'/assets/',//http://localhost:8080/app.js --> http://localhost:8080/assets/app.js
        /*
         * 假设你主机名为 localhost:8080 , 请求 API 的 url 是 http：//your_api_server.com/user/list
         * '/proxy'：如果点击某个按钮，触发请求 API 事件，这时请求 url 是http：//localhost:8080/proxy/user/list 。
         * changeOrigin：如果 true ，那么 http：//localhost:8080/proxy/user/list 变为 http：//your_api_server.com/proxy/user/list 。但还不是我们要的 url 。
         * pathRewrite：重写路径。匹配 /proxy ，然后变为'' ，那么 url 最终为 http：//your_api_server.com/user/list 。
         */
        proxy:{
            '/proxy':{
                target:'http://your_api_server.com',
                changeOrigin:true,
                pathRewrite:{
                    '^/proxy':''
                }
            }
        },

    },
    plugins:[
        //new CleanWebpackPlugin(["./4.develop/dist"]),
        new  HtmlWebpackPlugin({
            title:"开发"
        })
    ]
};