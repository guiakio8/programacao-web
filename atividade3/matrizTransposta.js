let transporMatriz = {
    matrix: [],


    transpor: function (x) {
        for (let i = 0; i < x[0].length; i++) {
            console.log(this.x)
        }


        for (let j = 0; j < x[0].length; j++) {
            for (let i = 0; i < x.length; i++) {
                this.matrix += x[i][j] + ' ';
            }
            this.matrix += '\n';
        }
        console.log(this.matrix)
    }


}
const matriz = [[1, 2], [3, 4], [5, 6]];
transporMatriz.transpor(matriz)

// transporMatriz.matrix = [[1, 2], [3, 4], [5, 6]];
// transporMatriz.transpor();

