var bodyparser = require("body-parser");
var express = require('express');
var app = express();
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended:true}));

var coisa = require('./routes/coisa');

app.use("/api/coisa", coisa);

app.listen(3000, function(){
    console.log("eaaaeee");
})