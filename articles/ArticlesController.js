const express = require("express");
const router = express.Router();

router.get("/articles", (req,res) => {
    res.send("Rota de Artigos");
});

router.get("/admin/categories/new", (req, res) => {
    res.send("Rota para criar uma novo artigo!");
});

module.exports = router;