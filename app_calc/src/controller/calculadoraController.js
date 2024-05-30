const calc = require('../calculadora/calculadora');

function index(req, res) {
    let err = req.query.erro_valor;
    res.render('index.html', { err });
}

function resultado(req, res) {
    let v1 = Number(req.body.v1);
    let v2 = Number(req.body.v2);
    let op = req.body.op;
    let resultado;
    let nmOperador = calc.nomeOperador(op);

    if (isNaN(v1) || isNaN(v2)) {
        res.redirect('/?erro_valor=true');
    } else {
        resultado = calc.calcular(v1, v2, op);
        res.render('resultado.html', { v1, v2, nmOperador, resultado })
    }

}

module.exports = {
    index,
    resultado
}