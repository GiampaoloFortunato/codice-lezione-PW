const fs = require('fs');
const http = require('http');

const homepage = fs.readFileSync("index.html", "utf-8");

const data = [
    {'nome': 'pane', 'quantita': 2},
    {'nome': 'vino', 'quantita': 3}
];

const server = http.createServer((req, res) => {
    const pathname = req.url;
    if(pathname == '/'){
        res.writeHead(200, {'Content-type':'text/html'});
        res.write(homepage);
        res.end;
    }else if(pathname == '/info'){
        res.writeHead(200, {'Content-type':'text/html'});
        res.end("<h1>Informazioni</h1>");
    }else if(pathname == '/api'){
        res.writeHead(200, {'Content-type':'application/json'});
        res.end(JSON.stringify(data));
    }else{
        res.writeHead(404, {'Content-Typer':'text/html'});
        res.end("<h1>File not found</h1>");
    }
});

server.listen(8085, '127.0.0.1');

