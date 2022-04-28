"use strict";

/**
 * Esempi su map: 
 */

let names = ["mario", "giovanna", "pippo"];

let dr = names.map(items => `Dr. ${items.toUpperCase()}`);

let nomePiuLungo = names.reduce((acc, item) => item.length > acc[0] ?  [item.length, item] :  acc, [0,''])


/**
 * Carrello della spesa:
 */

let products = [
    {'id': 1, 'price': 5.2, 'description': 'carote'},
    {'id': 2, 'price': 2.4, 'description': 'zucchine'},
    {'id': 3, 'price': 1.0, 'description': 'patate'},
    {'id': 4, 'price': 4.2, 'description': 'broccoli'},
];

let cart = {
    shoppingBag: [],
    add: function (prod){ 
        this.shoppingBag.push(prod);
    },
    remove: function(descr){
        for(let i= 0; i < this.shoppingBag.length; i++){
            if(this.shoppingBag[i].description === descr){
                this.shoppingBag.splice(i, 1);
                return;
            }
        }
    }
};