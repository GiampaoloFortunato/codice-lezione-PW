"use strict";

/*
*   Costruttori, prototype, __proto__
*/

function Pig(name, age){
    this.name = name;
    this.age = age;
}

let jimmy = new Pig("Jimmy", 2);
let timmy = new Pig("Timmy", 2);
let tommy = new Pig("Tommy", 2);

Pig.prototype.sayMyName = function(){
    console.log(`Ciao mi chiamo ${this.name}`);
}

jimmy.sayMyName();
timmy.sayMyName();
tommy.sayMyName();

/*
*   Far comunicare js con HTML
*/

function primoPulsante(){
    document.getElementById("test").innerHTML = "ciao";
}


//window.onload = function() {document.getElementById("btnChangeText").onclick = primoPulsante;}


function onDivClick(){
    alert("Bravo!");
}
/* Metodo 1:*/
window.onload = function(){
    document.getElementById("maCheBelDiv").onclick = onDivClick;
}

