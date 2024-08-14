const express = require("express");
const router = express.Router();

//Consultar
router.get("/:id_produto", (req, res, next) => {
  const id = req.params.id_produto;

  res.status(200).send({
    mensagem: "Retornar os PRODUTOS",
    id: id,
  });
});

//Inserir
router.post("/", (req, res, next) => {
  const produto = {
    nome: req.body.nome,
    preco: req.body.preco,
  };
  res.status(201).send({
    mensagem: "Inserir os PRODUTOS",
    produtoCriado: produto,
  });
});
//Alterar
router.patch("/", (req, res, next) => {
  res.status(201).send({
    mensagem: "Alterar PRODUTOS",
  });
});
//Excluir
router.delete("/", (req, res, next) => {
  res.status(201).send({
    mensagem: "Excluir PRODUTOS",
  });
});

module.exports = router;
