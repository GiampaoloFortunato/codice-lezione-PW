"use strict";

function somma(a = 0, b = 0){
    return Number(a) + Number(b);
}

function calcolatrice(){
    let n1, n2;
    n1 = prompt("Inserisci primo numero");
    n2 = prompt("Inserisci secondo numero");
    alert("la somma e' " + somma(n1, n2));
}

let sottrazione = function (a, b){
    return Number(a) - Number(b);
}


/**
 * descrizione di cosa fa la funzione (nota: non bisogna dire come lo fa, non ci interessa)
 * @param {String} question : la stringa che vogliamo... 
 * @param {function} yes 
 * @param {function} no 
 */
function ask(question, yes, no){
    if(confirm(question)){
        yes();
    }
    else{
        no();
    }
}
ask(
    "Sei sicuro?",
    () => alert("Hai detto si"),
    () => alert("Hai detto no")
)

