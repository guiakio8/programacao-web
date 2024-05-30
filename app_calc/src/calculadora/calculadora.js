function calcular(num1, num2, op) {
    let resultado;

    switch (op) {
        case '+':
            resultado = num1 + num2;
            break;
        case '-':
            resultado = num1 - num2;
            break;
        case '/':
            resultado = num1 / num2;
            break;
        case '*':
            resultado = num1 * num2;
            break;
    }
    return resultado;
}

function nomeOperador(op) {
    let nmOperador;

    switch (op) {
        case '+':
            nmOperador = 'soma';
            break;
        case '-':
            nmOperador = 'subtração';
            break;
        case '/':
            nmOperador = 'divisão';
            break;
        case '*':
            nmOperador = 'multiplicação';
            break;
    }
    return nmOperador;
}

module.exports = {
    calcular,
    nomeOperador
}