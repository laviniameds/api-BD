var bodyparser = require("body-parser");
var express = require('express');
var app = express();
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended:true}));

var usuario = require('./routes/usuario');

app.use("/api/usuario", usuario);

app.listen(3000, function(){
    console.log("eaaaeee");
})