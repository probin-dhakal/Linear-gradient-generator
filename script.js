"use strict";

let btn1 = document.getElementById('myBtn1');
let btn2 = document.getElementById('myBtn2');
let copyCode = document.querySelector('.copyCode');

const hexValues = () => {

    let myHex="0123456789ABCDEF";
    let colors = "#";
    for(let i=0; i<6;i++){
        colors = colors + myHex[Math.floor(Math.random()*16)];
       // console.log(colors)
    }
    return colors;
}


const handleButton1 =()=>{
let rgb1 = hexValues();
// console.log(rgb1);
btn1.innerHTML = rgb1;
document.body.style.backgroundImage = `linear-gradient(to right, ${rgb1}, ${btn2.innerHTML})`;

copyCode.innerHTML = `background: linear-gradient(to right, ${rgb1}, ${btn2.innerHTML});`;

};


const handleButton2 = ()=>{
    let rgb2 = hexValues();
    // console.log(rgb2);
    btn2.innerHTML = rgb2;
 document.body.style.backgroundImage = `linear-gradient(to right, ${btn1.innerHTML}, ${rgb2})`;
copyCode.innerHTML = `background: linear-gradient(to right, ${btn1.innerHTML}, ${rgb2});`;
}




btn1.addEventListener('click', handleButton1);
btn2.addEventListener('click', handleButton2);

