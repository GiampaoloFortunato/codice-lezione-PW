const path = "file.json";

fetch(path)
    .then(res => res.json())
    .then(obj => visualizzaMenu(obj));

const visualizzaMenu = function(obj){
    const ul = document.getElementById('lista-menu');
    for(let i=0; i<obj.length; i++){
        const li = document.createElement('li');
        const link = document.createElement('a');
        link.innerText = obj[i].desc;
        link.setAttribute('href', obj[i].link);
        li.appendChild(link);
        ul.appendChild(li);
    }
}