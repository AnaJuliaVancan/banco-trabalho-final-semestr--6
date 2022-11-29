var express = require("express");
var app = express();
var { produto } = require("./models");
var cors = require('cors');
 
app.use(express.json());
app.use(cors());
app.use(express.urlencoded({
    extended: true
}))
 
app.get("/produtos", async function (req, res){
    try {
        const resultado = await produto.findAll();
        res.json(resultado)
    } catch (error) {
        console.log(error)
    }
});
 
app.get("/produto/:id", async function (req, res){
    try {
        const resultado = await produto.findOne({where:{id: req.params.id}});
        res.json(resultado)
    } catch (error) {
        console.log(error)
    }
});
 
app.post("/produto", async function (req, res){
    var resultado = await produto.create(req.body);
    res.json(resultado)
});
 
app.put("/produto/:id", function (req, res){
    var resultado = produto.update(req.body, {where : {id:req.params.id}});
    res.json(resultado)
});
 
app.listen(3000, function(){
    console.log("O servidor está funcionando!")
});
