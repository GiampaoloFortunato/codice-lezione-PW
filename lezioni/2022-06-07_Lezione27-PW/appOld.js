const express = require("express");

const app = express();

app.get("/info", (req, res) => {
    res.send("Pagina info");
});

app.get("/", (req, res) => {
    res.send("ciao da express");
});

app.post("/info", (req, res) => {
    res.status(400).send("Metodo non supportato");
});
app.get("/about", (req, res) => {
    res.sendFile(__dirname + "/about.html");
});

app.get("/api", (req, res) => {
    res.status(200).json({'msg': 'ciao dal server'});
})





const port = 8080;

app.listen(port, ()=>{
    console.log(`Express APP started on port ${port}`);
})