const express = require('express');
const router = express.Router();

router.get('/',(req, res, next) => {
    res.status(200).send({
        mensagem: 'Usando GET na rota PRODUTOS'
    });

});

router.post('/',(req, res, next) => {
    res.status(201).send({
        mensagem: 'Usando POST na rota PRODUTOS'
    });

});

module.exports = router;