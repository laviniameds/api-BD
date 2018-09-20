var express = require('express');
var router = express.Router();
var { Pool } = require('pg');

const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'postgres',
    password: 'pgadmin',
    port: 5432,
})

//retorna tudo (listar)
router.get("/", function(req, res) {

    pool.query('select * from "ivan-trab-db".listarusuarios()',  function(err, result) {
        if (err) {
            return console.error('error running query', err);
        }
        res.send(result.rows);
    });
    
})

//retorna de acordo com o id (listar individual)
router.get("/:id", function(req, res) {
    pool.query(`select * from "ivan-trab-db".exibirusuario(${req.params.id})`,  function(err, result) {
        if (err) {
            return console.error('error running query', err);
        }
        res.send(result.rows[0]);
    });
})

//inserir
router.post("/", function(req, res){

    pool.query(`select "ivan-trab-db".inserirusuario(
        '${req.body.nome}',
        '${req.body.email}',
        '${req.body.senha}',
        '${req.body.telefone}'
    )`,  function(err, result) {
        if (err) {
            return console.error('error running query', err);
        }
    });

})

//editar
router.put("/:id", function(req, res){

    pool.query(`select "ivan-trab-db".editarusuario(
        ${req.params.id},
        '${req.body.nome}',
        '${req.body.email}',
        '${req.body.senha}',
        '${req.body.telefone}'
    )`,  function(err, result) {
        if (err) {
            return console.error('error running query', err);
        }
    });

})

//apagar
router.delete("/:id", function(req, res){

    pool.query(`select "ivan-trab-db".deletarusuario(${req.params.id})`, (err, result) => {
        if (err) {
            return console.error('error running query', err);
        }
        res.send({id: parseInt(req.params.id)});
    });

})

module.exports = router;