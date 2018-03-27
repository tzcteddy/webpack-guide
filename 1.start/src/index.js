/**
 * Created by tzc on 2018/3/27.
 */
import _ from 'lodash';
function common(){
    var element=document.createElement("div");
    element.innerHTML=_.join(['Hello','webpack'],'');
    return element;
}
document.body.appendChild(common());