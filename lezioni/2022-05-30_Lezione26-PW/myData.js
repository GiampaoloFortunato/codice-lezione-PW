const a = 5;

//la prima 'a' non è la stessa della exports
exports.a = 1;
exports.b = 10;

exports.add = function(i, j){
    return i+j;
}