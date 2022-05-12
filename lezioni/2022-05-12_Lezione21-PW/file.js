"use strict"

let imgArray = [
    "img/homer.webp",
    "img/homer1.webp",
    "img/Homer3.jpg"
];

let btn;
let img;

window.onload = () => {
    btn = document.getElementById("change-img");
    img = document.getElementById("imgCng");
    let i = 0;
    btn.addEventListener("click", () => {
        img.setAttribute("src", imgArray[i < 3 ? i++ : i = 0 ]);
    })
}
