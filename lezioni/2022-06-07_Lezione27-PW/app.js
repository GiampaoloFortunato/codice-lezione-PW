const express = require("express");
const fs = require('fs');

const prods = JSON.parse(fs.readFileSync('./data/products.json'));
const app = express();

app.get("/api/v1/products", (req, res) => {
    res.json({
        "status": "success",
        "data": prods
    });
});

const port = 8080;

app.listen(port, ()=>{
    console.log(`Express APP started on port ${port}`);
})