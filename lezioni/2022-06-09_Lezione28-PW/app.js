const express = require("express");
const fs = require('fs');
const morgan = require('morgan');

const prods = JSON.parse(fs.readFileSync('./data/products.json'));
const app = express();

console.log(process.env.PORT);

app.use(express.json());

app.use(morgan('dev'));

app.use(function(req, res, next){
    console.log("middleware test");
    req.user = 'IO';
    next();
})

const getAllProd = function(req, res){
    console.log(req.user);
    res.json({
        "status": "success",
        "data": prods
    });
}

const getOneProd = function(req, res){
    const prod = prods.find((el) => el.id == req.params.id);
    if(prod != undefined){
        res.json({
            "status": "success",
            "data": prod
        });
    }else{
        res.json({
            "status": "fail",
            "message": `ID ${req.params.id} not found`
        });
    }
}

const createProd = function(req, res){
    const new_id = prods[prods.length -1].id + 1;
    
    const new_prod = Object.assign({id: new_id}, req.body);

    prods.push(new_prod);

    res.json({
        "test": "success",
        "data": new_prod
    });
}

app.get("/api/v1/products/:id", getOneProd);
app.route("/api/v1/products")
    .get(getAllProd)
    .post(createProd);

const port = 8082;

app.listen(port, ()=>{
    console.log(`Express APP started on port ${port}`);
});