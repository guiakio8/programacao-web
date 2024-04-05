function verifica(num) {
    if (num === 3 || num === 1 || num === 2) {
        return `${num} é primo`
    } else {
        if (Number.isInteger(num / 2) || Number.isInteger(num / 3)) {
            return `${num} não é primo`;
        }
    }
    return `${num} é primo`;
}

module.exports = {
    verifica,
}