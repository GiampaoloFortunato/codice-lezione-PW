/**
 * NUOVO GIOCO: DISEGNA CON GLI AMICI
 * 
 * TODO:
 *  1. Crea tela dove poter disegnare
 */

"use strict"

let canvas = document.createElement("canvas");
canvas.width = 800;
canvas.height = 800;
document.body.appendChild(canvas);

let ctx = canvas.getContext("2d");

const requestAnimationFrame = window.requestAnimationFrame ||window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame;

let coor = {x: 0, y: 0, draw: false};
function update(){
    canvas.addEventListener("mousedown", () => {
        coor.draw = true;
    });
    canvas.addEventListener("mouseup", (evento) => {
        coor.x = evento.clientX;
        coor.y = evento.clientY;
        coor.draw = false;
    });
    canvas.addEventListener("mousemove", (evento) => {
        coor.x = evento.clientX;
        coor.y = evento.clientY;
    })
}

function render(){
    if(coor.draw){ 
        ctx.lineTo(coor.x, coor.y);
        ctx.stroke();
    }
    else{
        ctx.moveTo(coor.x, coor.y);
    } 
}

function main(){
    update();
    render();
    requestAnimationFrame(main);
}

main();