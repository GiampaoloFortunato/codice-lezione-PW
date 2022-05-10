"use strict";

/*
*   CREARE NUOVI ELEMENTI

let lista;
let bt;

window.onload = function(){
    bt = document.getElementById("myButton");
    lista = document.getElementById("myList");
    bt.addEventListener("click",() => addNewElementToList());
}

function addNewElementToList(){
    let FMquotes = [
        "to break free",
        "to ride mu bicycle",
        "it all",
        "it now"
    ];
    let newElem = document.createElement("li");
    newElem.appendChild(
        document.createTextNode(FMquotes[Math.floor(Math.random() * FMquotes.length)])
        );
    lista.appendChild(newElem);
}
*/

/*
*   XMLHttpRequest
 */

let url = "voti.json";
let xhr = new XMLHttpRequest();
xhr.onreadystatechange = () => {
    //readyState uguale 4 significa DONE. Può assumere valori da 0 a 4
    if (xhr.readyState === 4 && xhr.status === 200){
        let exams = JSON.parse(xhr.responseText);

        let tbody = document.getElementById("voti").getElementsByTagName("tbody");
        exams.forEach((el) => {
            let tr = document.createElement("tr");
            let tdEx = document.createElement("td");
            let txtEx = document.createTextNode(el.esame);
            let tdMark = document.createElement("td");
            let txtMark = document.createTextNode(el.voto);
            tdEx.appendChild(txtEx);
            tdMark.appendChild(txtMark);
            tr.appendChild(tdEx);
            tr.appendChild(tdMark);
        
            tbody[0].appendChild(tr);
        });
    }
};

//mettendo a true abbiamo la richiesta asincrona, con false sarà sincrona
xhr.open("GET", url, true);
xhr.send(null);
