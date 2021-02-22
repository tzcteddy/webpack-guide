const path=require('path')
const HtmlWebpackPlugin=require('html-webpack-plugin')
const jsLoader=require('./loaders/js-loader')
console.log(path.resolve(__dirname,'./index.html'))
module.exports={
  entry:{
    main:path.resolve(__dirname,'./src/main.js')
  },
  output:{
    filename:'bundle.js',
    path:path.resolve(__dirname,'/dist')
  },
  
  module:{
    rules:[
      {
				test: /\.js$/,
        include:/src/,
				use:[{
          loader:path.resolve(__dirname,'./loaders/js-loader'),
          options:{
            name:1
          }
        },{
          loader:path.resolve(__dirname,'./loaders/js2-loader'),
          options:{
            name:1
          }
        }]
			},

    ]
  },
  devServer:{
    port:9999,
    host:'localhost'
  },
  plugins:[
    new HtmlWebpackPlugin({
      title:'哈哈',
      template:path.resolve(__dirname,'./index.html'),
      inject:'body'
    })
  ]
}