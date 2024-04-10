var produtos = [];

function criarProduto(id, nome, qtd) {
    let p = {
        id: id,
        nome: nome,
        qtd: qtd
    }
    return p;
}

function adicionarProduto(p) {
    produtos.push(p);
}

function listarProdutos() {
    return produtos;
}

function removerProduto(p) {
    produtos = produtos.filter(p => {
        return p.id != p.id;

    })
}

module.exports = {
    criarProduto,
    adicionarProduto,
    listarProdutos,
    removerProduto,
}