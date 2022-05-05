"use strict";

const MOVE_TIME = 500;
let el;
let body;
let isPageBgWhite = true;

setInterval(moveDiv, MOVE_TIME);

window.onload = function(){
    el = document.getElementById("test");
    body = document.getElementsByTagName("body")[0];
    el.addEventListener("click", ()=>alert("YEEE!"));
}

function moveDiv(){
    const pageH = 500;
    const pageW = 500;
    let mtop = parseInt(Math.random()*pageH);
    let mleft = parseInt(Math.random()*pageW);
    el.style.marginLeft =`${mleft}px`;
    el.style.marginTop = `${mtop}px`;
    isPageBgWhite ? el.style.backgroundColor = "white" : el.style.backgroundColor = "black";
    isPageBgWhite ? body.style.backgroundColor = "black" : body.style.backgroundColor = "white";
    isPageBgWhite ? isPageBgWhite = false : isPageBgWhite = true;
}