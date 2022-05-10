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
        return this.shoppingBag.reduce((acc, item) => acc + item.price, 0);
    }
};

let elemAdd;
let elemDelete;

window.addEventListener("click", () => main());

function main(){  
    elemAdd = document.getElementsByClassName("add");
    elemDelete = document.getElementsByClassName("delete");
    fCicloAdd();
    fCicloDelete();  
}

function fCicloAdd(){
    for(let i = 0; i < elemAdd.length; i++){
        elemAdd[i].addEventListener("click",() => visualizzaCarrello(i));
    }
}

function visualizzaCarrello(index){
    aggiungiProdotto(index);
    visualizzaNuovoProdotto();
    stampaPrezzo();
}

function aggiungiProdotto(index){
    car.add(
        {id:index, name: document.getElementsByTagName("h3")[index].innerText,price: parseFloat(document.getElementsByClassName("price")[index].innerText)}
    );
}

function visualizzaNuovoProdotto(){
    //modo 1
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

    //modo 2
    //document.getElementById("lista").innerHTML += "<li class='prodList'> <p>" + car.shoppingBag[car.shoppingBag.length-1].name + "</p><div class='costo'>"+ car.shoppingBag[car.shoppingBag.length-1].price + "</div><button class='delete'>x</button></li>";
}

function stampaPrezzo(){
    if(car.shoppingBag.length != 0){
        document.getElementById("totalPrice").innerHTML = "<p>" + car.totalPrice() +"</p>";
    }
}

//Non funziona se premo il pulsante, ma la funzione è corretta, in quanto quando la eseguo da console si comporta nel modo previsto.
function fCicloDelete(){
    for(let i = 0; i < car.shoppingBag.length; i++){
        elemDelete[i].addEventListener("click", () => cancellaDaCarello(i));
    }
}

function cancellaDaCarello(index){
    car.remove(car.shoppingBag[index].name);
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