/**
 *
 * @param {Number} a um numero inteiro
 * @param {Number} b um numero inteiro
 * @returns {Number}
 */


function somar(a, b){
    return Number(a) + Number(b);
}

function subtrair(a, b) {
    return Number(a) - Number(b);
}

function multiplicar(a, b) {
    return Number(a) * Number(b);
}

function dividir(a, b) {
    return Number(a) / Number(b);
}

const PI = 3.14

module.exports = {
    somar,
    subtrair,
    multiplicar,
    dividir,
    PI
};