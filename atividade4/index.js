const calc = require('./util/calculadora');
const express = require('express');
const app = express();
const vnp = require('./util/verificar_numero_primo');


app.get('/ola', function (req, res) {
    res.send('Olá, mundo!');
});

const PORT = 8080;
app.listen(PORT, function () {
    console.log('app rodando na porta ' + PORT);
});

app.get('/ola/:nome', function (req, res) {
    let n = req.params.nome;
    res.send(n);
})

app.get('/vnp/:n', function (req, res) {
    let n = req.params.n;
    let ehPrimo = vnp.verifica(n);
    res.send(ehPrimo);
})

app.get('/som/:a/:b', function (req, res) {
    let a = parseInt(req.params.a);
    let b = parseInt(req.params.b);
    let op = calc.somar(a, b);
    res.send(""+op);
})

app.get('/sub/:a/:b', function (req, res) {
    let a = parseInt(req.params.a);
    let b = parseInt(req.params.b);
    let op = calc.subtrair(a, b);
    res.send(""+op);
})

app.get('/mult/:a/:b', function (req, res) {
    let a = parseInt(req.params.a);
    let b = parseInt(req.params.b);
    let op = calc.multiplicar(a, b);
    res.send(""+op);
})

app.get('/div/:a/:b', function (req, res) {
    let a = parseInt(req.params.a);
    let b = parseInt(req.params.b);
    let op = calc.dividir(a, b);
    res.send(""+op);
})

