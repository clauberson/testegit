const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.status(200).send({ message: 'olá mundo!'});
})

app.get('/ola', (req, res) => {
    res.status(200).send({ message: 'olá!'});
})

app.listen(3000, () => {
    console.log('rodando na porta 3000');
})

module.exports = app;
