/**
 * Created by tzc on 2018/3/27.
 */
import _ from 'lodash';
import myPrint from './print';
import "./index.css";

function common() {
    var element = document.createElement("div");
    var btn = document.createElement("button");

    btn.innerHTML = 'Click me and check console';
    btn.onclick = myPrint;
    element.appendChild(btn);
    return element;
}
//document.body.appendChild(common());
let element=common();// 当 print.js 改变导致页面重新渲染时，重新获取渲染的元素
document.body.appendChild(element);
if(module.hot){
    module.hot.accept("./print",function () {
        console.log('Accepting Print Updated');
        //myPrint();
        document.body.removeChild(element);
        element=common();// 重新渲染页面后，component 更新 click 事件处理
        document.body.appendChild(element);
    })
}