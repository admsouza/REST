const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
    res.status(200).send({
        mensagem: 'Usando GET na rota PEDIDOS'
    });

});

router.post('/', (req, res, next) => {
    res.status(201).send({
        mensagem: 'Usando POST na rota PEDIDOS'
    });

});

router.patch('/', (req, res, next) => {
    res.status(201).send({
        mensagem: 'Usando PATH na rota PEDIDOS'
    });

});
router.delete('/', (req, res, next) => {
    res.status(201).send({
        mensagem: 'Usando DELETE na rota PEDIDOS'
    });

});

module.exports = router;