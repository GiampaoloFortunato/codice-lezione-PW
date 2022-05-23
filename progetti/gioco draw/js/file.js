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
document.body.insertBefore(canvas, document.getElementsByTagName("aside")[0]);

let ctx = canvas.getContext("2d");

const requestAnimationFrame = window.requestAnimationFrame ||window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame;

let coor = {x: 0, y: 0, draw: false, color: '#000000'};
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
    document.getElementsByClassName("colori")[0].addEventListener("click", (e) =>{
        if(e.target.classList.contains("red")){
            coor.color = '#ff0000';
        }else if(e.target.classList.contains("blue")){
            coor.color = '#0000ff';
        }
    })
}

function render(){
    if(coor.draw){ 
        ctx.lineTo(coor.x, coor.y);
        ctx.strokeStyle = coor.color;
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