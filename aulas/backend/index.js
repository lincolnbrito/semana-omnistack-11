const express = require('express');

const app = express();

app.use(express.json());

app.post('/', (req, res) => {

    console.log(req.query);
    console.log(req.params);
    console.log(req.body);

    res.json({
        evento: 'Semana Omnistack 11.0',
        aluno: 'Lincoln Brito'
    });
});

app.listen(3333);