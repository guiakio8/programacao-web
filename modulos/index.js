const express = require('express');
const app = express();
const calc = require('./util/calculadora');
const estoque = require('./src/estoque');

app.get('/', (req, res) => {
    res.send('Página inicial');
})

const PORT = 8080;
app.listen(PORT, () => {
    console.log('app rodando na porta ' + PORT);
})

app.get('/adicionar/:id/:nome/:qtd', function (req, res) {
    let id = req.params.id;
    let nome = req.params.nome;
    let qtd = req.params.qtd;
    let p = estoque.criarProduto(id, nome, qtd);
    estoque.adicionarProduto(p);
})

app.get('/listar', (req, res) => {
    res.send(estoque.listarProdutos());
})

app.get('/remover/:id', (req, res) => {
    let id = req.params.id;
    estoque.removerProduto(id);
    res.send(estoque.listarProdutos());
})