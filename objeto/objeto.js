let calculadora = {
    numA: 0,
    numB: 0,

    somar: function () {
        return this.numA + this.numB;
    }
};

calculadora.numA = 2;
calculadora.numB = 3;

console.log(calculadora.numA + calculadora.numB);
console.log(calculadora.somar())

const pessoa = {
    nome: "Nome da Pessoa",
    cpf: 123456789,
    telefone: 6199999999
}

for (const key in pessoa) {
    console.log(key + ' - ' + pessoa[key]);
}

// let arr = [0, 1, 33, 56, 88, 21];
let arr = [false, 1, "DOIS", 11, 56, pessoa];

for (let i = 0; i < arr.length; i++){
    console.log(i + ' - ' + arr[i])
}

let matriz = [[1,2], [3,4]];

for (const key in matriz) {
    console.log(key + ' - ' + matriz[key])
}

console.log(matriz)

// for (const key in arr) {
//     console.log(key + ' - ' + arr[key])
// }