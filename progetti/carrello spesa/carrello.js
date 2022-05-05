let car = {
    shoppingBag:[],
    add: function(prodotto){
        this.shoppingBag.push(prodotto);
    },
    totalPrice: function(){
        return this.shoppingBag.reduce((acc, item) => acc + item.price, 0);
    }
};

let elem;

window.onload = function(){
    elem = document.getElementsByTagName("button");
    for(let i = 0; i < elem.length; i++){
         elem[i].addEventListener("click",()=>visualizzaCarrello(i));
    }
}


function visualizzaCarrello(index){
    aggiungiProdotto(index);
    visualizzaNuovoProdotto();
    stampaPrezzo();
}

function aggiungiProdotto(index){
    let prodotto = {id:index, name: document.getElementsByTagName("h3")[index].innerText,price: parseFloat(document.getElementsByClassName("price")[index].innerText)};
    car.add(prodotto);
}

function visualizzaNuovoProdotto(){
    document.getElementById("lista").innerHTML += "<li> <p>" + car.shoppingBag[car.shoppingBag.length-1].name + "</p><div class='costo'>"+ car.shoppingBag[car.shoppingBag.length-1].price + "</div>"  + "</li>";
}

function stampaPrezzo(){
    if(car.shoppingBag.length != 0){
        document.getElementById("totalPrice").innerHTML = "<p>" + car.totalPrice() +"</p>";
    }
}