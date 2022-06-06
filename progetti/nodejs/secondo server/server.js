const http = require('http');
const fs = require('fs');

const fileLista = fs.readFileSync('./lista.json', 'utf-8');
const errorReq = "{'status': 'error', 'msg':'API not implemented'}"

const server = http.createServer((req, res) => {
    const url = req.url;
    if(url == '/dati'){
        res.writeHead(200, {
            'Content-type': 'application/json', 
            'Access-Control-Allow-Origin': '*'
        });
        res.end(fileLista);
    }else{
        res.writeHead(200, {
            'Content-type': 'application/json', 
            'Access-Control-Allow-Origin': '*'
        });
        res.end(errorReq);
    }
});

server.listen(8081, '127.0.0.1');