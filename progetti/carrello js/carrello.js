let prodotti = [
    {
        id: 1,
        name: "ps1",
        price: 100.0
    },
    {
        id: 2,
        name: "ps2",
        price: 150.0
    },
    {
        id: 3,
        name: "ps3",
        price: 220.0
    },
    {
        id: 4,
        name: "ps4",
        price: 300.0
    },
    {
        id: 5,
        name: "ps5",
        price: 500.0
    },
];

let car = {
    shoppingBag: [],
    add: function(prod){
        this.shoppingBag.push(prod);
    },
    remove: function(name){
        for(let i= 0; i < this.shoppingBag.length; i++){
            if(this.shoppingBag[i].name === name){
                this.shoppingBag.splice(i, 1);
                return;
            }
        }
    },
    removeAll: function(){
        this.shoppingBag.length = 0;
    },
    totalPrice: function() {
        return this.shoppingBag.length != 0 ? this.shoppingBag.reduce((acc, item) => acc + item.price, 0) : 0;
    },
};
