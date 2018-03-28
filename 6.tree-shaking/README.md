#tree-shaking
> 通常用于描述移除 JavaScript 上下文中的未引用代码
>问题
+ 先清理dist问件时，总指向3.manage-output/dist 解决:
```
new CleanWebpackPlugin(['dist'],{
   root:__dirname
})
```