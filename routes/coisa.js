var express = require('express');
var router = express.Router();


//o array (vai ser sibtituído pela persistência BD)
var coisa = [
    {
        _id: 1,
        nome: "coisa 1", 
        descricao: "tenta descrever isso aqui"
    }
];

//retorna tudo (listar)
router.get("/", function(req, res) {
    res.send(coisa);
})

//retorna de acordo com o id (listar individual)
router.get("/:id", function(req, res) {
    res.send(coisa.filter(function (e) {
        return e._id == req.params.id;
    }))
})

//inserir
router.post("/", function(req, res){

    coisa.push({
        _id: controlID++,
        nome: req.body.nome,
        descricao: req.body.descricao       
    })

    res.send("success");

})

//editar
router.put("/:id", function(req, res){

    coisa = coisa.map(function(e){
        if(e._id == req.params.id){
            return({
                _id: e._id,
                nome: req.body.nome,
                descricao: req.body.descricao
            })
        }
        return e;
    })

    console.log(coisa);

    res.send("success");
})

//apagar
router.delete("/:id", function(req, res){

    coisa = coisa.filter(function (e) {
        return e._id != req.params.id;
    })

    res.send("success");
})

module.exports = router;