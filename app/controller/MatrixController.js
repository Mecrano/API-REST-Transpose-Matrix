class matrixController {
    constructor() {}

    isValid(matrix) {
        let squareMatrix = true;

        for (let i = 0; i < matrix.length; i++) {
            if (matrix[i].length !== matrix.length) {
                squareMatrix = false;
            }
        }
        return squareMatrix;
    }

    getEmptyMatrix(length) {
        let emptyMatrix = []
        for (let i = 0; i < length; i++) {
            emptyMatrix.push([]);

            for (let j = 0; j < length; j++) {
                emptyMatrix[i].push(j);
            }
        }

        return emptyMatrix
    }

    getTransposeMatrix(matrix) {
        const matrixLenght = matrix.length;
        let transposedMatrix = this.getEmptyMatrix(matrixLenght);

        for (let i = 0; i < matrixLenght; i++) {
            for (let j = 0; j < matrixLenght; j++) {
                transposedMatrix[i][j] = matrix[j][i];
            }
        }

        return transposedMatrix;
    }
}

module.exports = matrixController;
