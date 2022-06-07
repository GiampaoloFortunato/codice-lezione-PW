"use strict";

/*
 * Uso setInterval e setTimeout
 * Il primo esegue ciclicamente ogni tot ms una funzione, mentre la seconda esegue una volta sola la funzione dopo tot ms
 */

let counterVar = 0;
let timerId = setInterval(function() {
    console.log("ciao");
    counterVar += 1;
    if(counterVar >= 4){
        clearInterval((timerId));
    }
}, 500);

//setTimeout(() => location.reload(), 5000);


/*
* CLOSURE - sono fondamentali
*
*   Posso avere metodi o attributi provati. Posso quindi simulare la OOP.
*   Lo scope della inner function si chiude su quello del padre (outer function)
*/

function salutatore(name){
    let n = name;
    let x = 10;
    return function(y, z){
        console.log(`Ciao ${n}`);
        console.log('Variabile della outerFunction salutatore: ' +  x);
        console.log(y + z);
    };
}

let s = salutatore("Mario");
s("ciao sono mario", 10);

function counter(){
    let a = 0;
    return {
        inc: function(){++a},
        dec: function(){--a},
        get: () => a,
        reset: function(){a = 0}
    }
}

function Player(){
    let x= 0, y = 0;
    return {
        up: () => y++,
        down: () => y--,
        left: () => x--,
        right: () => x++,
        printCoords: () => console.log(`(${x},${y})`)
    };
}

let p = Player();
p.down();
p.right();
p.printCoords();


let p1 = Player();
p1.up();
p1.printCoords();



