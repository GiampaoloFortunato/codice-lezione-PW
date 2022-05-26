const http = require("http");
const fs = require("fs");
const url = require('url');

const server = http.createServer((req, res) => {
    const pathname = req.url;
    const queryObj = url.parse(pathname, true).query;
    if (pathname === '/'){
        res.writeHead(200, {'Content-Type':'text/html'});
        res.write(
            fs.readFileSync("html/index.html", "utf-8")
        );
        res.end();
    }
    if (pathname.includes('/login')){
        res.end("<h1>Effettua il login</h1> <h3>Ciao " + queryObj.name.toUpperCase() + "!! </h3>");
        
    }
});



server.listen(8084, '127.0.0.1');