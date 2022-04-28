"use strict";

let a = 20;

let calculator = {
    a: 0,
    b: 0,
    insert:function(){
        this.a = Number(prompt("Inserisci primo numero: "));
        this.b = Number(prompt("Inserisci secondo numero: "));
    },
    sum: function() { this.a + this.b},
};