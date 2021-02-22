/**
 * Created by tzc on 2018/3/27.
 */
const start = require('./1.start/webpack.start.js');
const resource = require('./2.manage-resources/webpack.resource');
const output = require('./3.manage-output/webpack.output');
const develop = require('./4.develop/webpack.develop');
const hmr = require('./5.hmr/webpack.hmr');
const tree = require('./6.tree-shaking/webpack.tree');
const dev = require('./7.product/webpack.dev');
const prod = require('./7.product/webpack.prod');
const loader = require('./8.loader/webpack.loader');
module.exports=loader;