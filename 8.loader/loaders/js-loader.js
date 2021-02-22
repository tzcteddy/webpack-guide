const loaderUtils=require('loader-utils')
function jsLoader(content){
  // var options=loaderUtils.getOptions(this)||{};
  // console.log(options)
  console.log('js')
  return content+`
   console.log(document);
   document.body.innerHTML='<p>123</p>'
  `
}
module.exports=jsLoader
module.exports.pitch=function(){
  console.log('js pitch')
}