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
        elem[i].addEventListener("click", ()=>i);
    }
}