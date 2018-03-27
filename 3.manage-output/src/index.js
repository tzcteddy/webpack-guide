/**
 * Created by tzc on 2018/3/27.
 */
import _ from 'lodash';
import myPrint from './print';

function common() {
    var element = document.createElement("div");
    var btn = document.createElement("button");

    btn.innerHTML = 'Click me and check console';
    btn.onclick = myPrint;
    element.appendChild(btn);
    return element;
}
document.body.appendChild(common());