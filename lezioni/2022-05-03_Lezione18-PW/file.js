"use strict";

/*
 * Uso setInterval e setTimeout
 * Il primo esegue ciclicamente ogni tot ms una funzione, mentre la seconda esegue una volta sola la funzione dopo tot ms
 */

let counter = 0
let timerId = setInterval(function() {
    console.log("ciao");
    counter += 1;
    if(counter >= 4){
        clearInterval((timerId));
    }
}, 500);

//setTimeout(() => location.reload(), 5000);


/*
 * CLOSURE - sono fondamentali
*/

function salutatore(name){
    let n = name;
    return function(){
        console.log(`Ciao ${n}`);
    };
}

let s = salutatore("Mario");
s();

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


