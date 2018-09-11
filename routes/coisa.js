var express = require('express');
var router = express.Router();

var coisa = [
    {
        _id: 1,
        nome: "coisa 1",
        descricao: "tenta descrever isso aqui"
    }
];

var controlID = 2;

router.get("/", function(req, res) {
    res.send(coisa);
})

router.get("/:id", function(req, res) {
    res.send(coisa.filter(function (e, i) {
        return e._id == req.params.id;
    }))
})


router.post("/", function(req, res){
    console.log("asdfasd")

    coisa.push({
        _id: controlID++,
        nome: req.body.nome,
        descricao: req.body.descricao       
    })

    res.send("success");

})

module.exports = router;