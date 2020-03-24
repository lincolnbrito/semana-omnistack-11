const express = require('express');

const routes = express.Router();

routes.post('/', (req, res) => {

    console.log(req.query);
    console.log(req.params);
    console.log(req.body);

    res.json({
        evento: 'Semana Omnistack 11.0',
        aluno: 'Lincoln Brito'
    });
});

module.exports = routes;