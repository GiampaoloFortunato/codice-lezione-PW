let car = {
    shoppingBag:[],
    add: function(prodotto){
        this.shoppingBag.push(prodotto);
    },
    remove: function(name){
        for(let i= 0; i < this.shoppingBag.length; i++){
            if(this.shoppingBag[i].name === name){
                this.shoppingBag.splice(i, 1);
                return;
            }
        }
    },
    totalPrice: function(){
        return this.shoppingBag.reduce((acc, item) => acc + item.price, 0).toFixed(2);
    }
};

let elemAdd;
let elemDelete;

window.onload = function(){
    elemAdd = document.getElementById("prodotti");
    elemDelete = document.getElementById("cntCarrello");  
    elemAdd.addEventListener("click", (evento) => visualizzaCarrello(evento));
    elemDelete.addEventListener("click", (evento) => cancellaDaCarello(evento));
}

function eventAdd(){
    for(let i = 0; i < elemAdd.length; i++){
        elemAdd[i].addEventListener("click",() => visualizzaCarrello(i));
    }
}

function visualizzaCarrello(evento){
    const nodoGenitore = evento.target.parentNode.parentNode;
    aggiungiProdotto(nodoGenitore);
    visualizzaNuovoProdotto();
    stampaPrezzo();
}

function aggiungiProdotto(nodoGenitore){
    let i;
    car.shoppingBag.length == 0 ? i = 0 : i = car.shoppingBag[car.shoppingBag.length-1].id + 1; 
    car.add(
        {id: i, name: nodoGenitore.getElementsByTagName("h3")[0].innerText,price: parseFloat(nodoGenitore.getElementsByClassName("price")[0].innerText)}
    );
}

function visualizzaNuovoProdotto(){
    let li = document.createElement("li");
    li.className = "prodList";
    let div = document.createElement("div");
    div.className = "costo";
    let button = document.createElement("button");
    button.className = "delete";
    let p = document.createElement("p");
    p.appendChild(document.createTextNode(car.shoppingBag[car.shoppingBag.length-1].name));
    div.appendChild(document.createTextNode(car.shoppingBag[car.shoppingBag.length-1].price));
    button.appendChild(document.createTextNode("x"));
    li.appendChild(p);
    li.appendChild(div);
    li.appendChild(button);
    document.getElementById("lista").innerHTML += li.outerHTML;
}

function stampaPrezzo(){
    let stampa = document.getElementById("totalPrice");
    if(car.shoppingBag.length > 0){
        stampa.innerHTML = "<p>" + car.totalPrice() +"</p>";
    }else{
        stampa.innerHTML = "";
    }
}

function cancellaDaCarello(evento){
    let nodoGenitore = evento.target.parentNode;
    car.remove(nodoGenitore.getElementsByTagName("p")[0].innerText);
    visualizzaProdotti();
    stampaPrezzo();
}
function visualizzaProdotti(){
    let carrello = document.getElementById("lista");
    carrello.innerHTML = "";
    for(let i = 0; i < car.shoppingBag.length ; i++){
        carrello.innerHTML += "<li class='prodList'> <p>" + car.shoppingBag[i].name + "</p><div class='costo'>"+ car.shoppingBag[i].price + "</div><button class='delete'>x</button></li>";
    }
}