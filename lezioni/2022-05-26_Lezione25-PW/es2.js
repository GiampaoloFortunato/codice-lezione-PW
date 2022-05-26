const http = require('http');

const server = http.createServer((req, res) => {
    const pathname = req.url;
    if(pathname == '/'){
        res.writeHead(200, {'Content-Typer':'text/html'});
        res.end("<h1>Ciao dal server</h1>");
    }else if(pathname == '/info'){
        res.writeHead(200, {'Content-Typer':'text/html'});
        res.end("<h1>Informazioni</h1>");
    }else{
        res.writeHead(404, {'Content-Typer':'text/html'});
        res.end("<h1>File not found</h1>");
    }
});

server.listen(8084, '127.0.0.1');

