function verifica(num) {
    if (num === 3 || num === 1 || num === 2) {
        return `${num} é primo`
    }
    if (Number.isInteger(num / 2) || Number.isInteger(num / 3)) {
        return `${num} não é primo`;
    }
    return `${num} é primo`;
}

console.log('O numero ' + verifica(0))
console.log('O numero ' + verifica(1))
console.log('O numero ' + verifica(2))
console.log('O numero ' + verifica(3))
console.log('O numero ' + verifica(7))
console.log('O numero ' + verifica(83))
console.log('O numero ' + verifica(100))
console.log('O numero ' + verifica(991))
console.log('O numero ' + verifica(104729))
console.log('O numero ' + verifica(14348907))
