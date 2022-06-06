const http = require('http');
const fs = require('fs');

const path = 'json/lista.json';
const jsonFileInput = fs.readFileSync(path, 'utf-8');
const codeError = "{'status': 'error', 'msg':'API not implemented'}";

const server = http.createServer((req, res) => {
    const url = req.url;
    if(url == '/data'){
        res.writeHead(200, {'Content-type': 'application/json', 'Access-Control-Allow-Origin': '*'});
        res.end(jsonFileInput);
        console.log(jsonFileInput);
    }else{
        //Codice di stato? È giusto mettere 200?
        //res.writeHead(200, {'Content-type': 'application/json'});
        res.end(codeError);
    }
});

server.listen(8080, '127.0.0.1');
