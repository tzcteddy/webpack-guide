/**
 * Created by tzc on 2018/3/27.
 */
import _ from 'lodash';
import './index.css';
import ImgUrl from './no1.png';
function common(){
    var element=document.createElement("div");
    element.innerHTML=_.join(['Hello','webpack'],'');
    element.classList.add("text");
    var myImg=new Image();
    myImg.src=ImgUrl;
    element.appendChild(myImg);
    return element;
}
document.body.appendChild(common());