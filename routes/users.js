var express = require("express");
var router = express.Router();

var softwares = [
   {codigo:1 , nome:"PES 2K1X" , preco: 19.46 , categoria: "Aventura"},
   {codigo:2 , nome:"Lego Jurassic Word" , preco: 21.68 , categoria: "Ação"},
   {codigo:3 , nome:"Spore"              , preco: 54.63 , categoria: "Survival"}
];

/* GET users listing. */
router.get("/softwares", function(req, res, next){
    res.write(JSON.stringify(softwares));
    console.log("+Request GET solicitada");
    res.end();
});

module.exports = router;
