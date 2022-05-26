/* INIZIO PARTE NODEJS */

//modulo di commonjs
const fs = require('fs');

//Funzione asincrona
fs.readFile('input2.txt', 'utf-8', (err, data) => {
    console.log(data);
});

const txt = fs.readFileSync('input.txt', 'utf-8');
console.log(txt);

