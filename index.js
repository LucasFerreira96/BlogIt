const express = require("express");
const app = express();


app.get("/", (req,res) => {

    res.send("Bem vindo ao BlogIt");

});

app.listen(8080, () => {
    console.log("O servidor está rodando ;)")
})