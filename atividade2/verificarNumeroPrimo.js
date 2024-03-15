function fits(num) {
    if (num === 3 || num === 1 || num === 2) {
        return `${num} é primo`
    }
    if (Number.isInteger(num / 2) || Number.isInteger(num / 3)) {
        return `${num} não é primo`;
    }
    return `${num} é primo`;
}

console.log('O numero ' + fits(0))
console.log('O numero ' + fits(1))
console.log('O numero ' + fits(2))
console.log('O numero ' + fits(3))
console.log('O numero ' + fits(7))
console.log('O numero ' + fits(83))
console.log('O numero ' + fits(100))
console.log('O numero ' + fits(991))
console.log('O numero ' + fits(104729))
console.log('O numero ' + fits(14348907))
