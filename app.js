const express = require("express");
const app = express();
const morgan = require("morgan"); //mostrar logs no terminal
const bodyParser = require("body-parser");

const rotaProdutos = require("./routes/protudos");
const rotaPedidos = require("./routes/pedidos");

app.use(morgan("dev"));
app.use(bodyParser.urlencoded({ extended: false })); // pegar apenas dados simples
app.use(bodyParser.json()); //Aceitar apenas formato json com entrada no body

app.use((req, res, next) => {
  res.header("Acces-Control-Allow-Origin", "*");
  req.header(
    "Acces-Control-Allow-Header",
    "Origin, X-Requrested-With, Content-Type, Accept, Authorization"
  );

  if (req.method === "OPTIONS") {
    res.header("Acess-Control-Allow-Methods", "PUT, PSOT, PATCH, DELETE, GET");
    return res.status(200).send({});
  }
  next();
});
app.use("/produtos", rotaProdutos);
app.use("/pedidos", rotaPedidos);

// Tratar rotas não encontradas
app.use((req, res, next) => {
  const erro = new Error("Não encontrado");
  erro.status = 404;
  next(erro);
});

app.use((error, req, res, next) => {
  res.status(error.status || 500);
  return res.send({
    erro: {
      mensagem: error.message,
    },
  });
});
module.exports = app;
