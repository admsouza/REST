const express = require('express');
const app = express();

const rotaProdutos = require('./routes/protudos');

app.use('/produtos', rotaProdutos)

module.exports = app;