const http = require("http");
const fs = require("fs");

const fileUsr = JSON.parse(fs.readFileSync("./file.json", 'utf-8'));

const server = http.createServer((req, res) => {
    const url = req.url;
    if(url == '/user'){
        res.writeHead(200, {
            'Content-type': 'application/json', 
            'Access-Control-Allow-Origin': '*'
        });
        res.end(JSON.stringify(fileUsr));
    }
});

server.listen(8080, "127.0.0.1");