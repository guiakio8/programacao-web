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

function removerProduto(id) {
    produtos = produtos.filter(p => {
        let listaProduto = p.id != id
        return listaProduto;
    })
}

function editarProduto(id, qtd) {
    produtos = produtos.map(p => {
        if (id == p.id) {
            p.qtd = qtd;    
        }
        return p;
    })
}

module.exports = {
    criarProduto,
    adicionarProduto,
    listarProdutos,
    removerProduto,
    editarProduto,
}