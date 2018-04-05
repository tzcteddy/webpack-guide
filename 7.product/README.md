##构建生产环境

###webpack.common.js
我们设置了 entry 和 output配置，并且在其中引入这两个环境公用的全部插件。
###webpack.dev.js
我们为此环境添加了推荐的 devtool（强大的 source map）和简单的 devServer 配置。
###webpack.prod.js
我们引入了之前在 tree shaking 指南中介绍过的 UglifyJSPlugin。