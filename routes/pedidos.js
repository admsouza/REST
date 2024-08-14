const e = require("express");
const express = require("express");
const router = express.Router();

//Consultar
router.get("/:id_pedido", (req, res, next) => {

    const id = req.params.id_pedido;
    res.status(200).send({
      mensagem: "Retornar os PEDIDOS",
      id: id,
    });
  res.status(200).send({
    mensagem: "Retornar PEDIDOS",
  });
});

//Inserir
router.post("/", (req, res, next) => {
  const pedido = {
    id_produto: req.body.id_produto,
    quantidade: req.body.quantidade,
  };
  res.status(201).send({
    mensagem: "Inserir PEDIDOS",
    pedidoCriado: pedido,
  });
});

//Alterar
router.patch("/", (req, res, next) => {
  res.status(201).send({
    mensagem: "Alterar PEDIDOS",
  });
});

//Excluir
router.delete("/", (req, res, next) => {
  res.status(201).send({
    mensagem: "Excluir PEDIDOS",
  });
});

module.exports = router;
