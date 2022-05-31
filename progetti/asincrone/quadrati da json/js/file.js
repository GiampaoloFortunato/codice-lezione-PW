"use strict"

const url = 'json/quad.json';

fetch(url)
    .then(res => res.json())
    .then(jsonObj => stampaQuadrati(jsonObj));

const stampaQuadrati = function(jsonObj){
    console.log(jsonObj);
    let tela = document.getElementById("tela");
    jsonObj.forEach(element => {
        let quadrato = document.createElement("div");
        quadrato.classList.add("quadrato");
        quadrato.style.backgroundColor = element.color;
        quadrato.style.top = element.y+"px";
        quadrato.style.left = element.x+"px";

        tela.appendChild(quadrato);
    });
}