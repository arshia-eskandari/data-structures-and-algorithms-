const directions = [
    [-1, 0],
    [0, 1],
    [1, 0],
    [0, -1],
];

const isValidCoordinate = (matrix, i, j) => {
    const rowNum = matrix.length;
    const colNum = matrix[0].length;
    if (i < 0) return false;
    if (i >= rowNum) return false;
    if (j < 0) return false;
    if (j >= colNum) return false;
    return true;
};

const dFS = (matrix, i, j, seen, values) => {
    if (!seen[i][j]) {
        values.push(matrix[i][j]);
        seen[i][j] = true;
    }
    for (const [d1, d2] of directions) {
        const newI = i + d1;
        const newJ = j + d2;
        if (isValidCoordinate(matrix, newI, newJ)) {
            if (!seen[newI][newJ]) {
                dFS(matrix, newI, newJ, seen, values);
                break;
            }
        }
    }
};

const matrixDFS = matrix => {
    const seen = matrix.map((_, i) => matrix[i].map(_ => false));
    const values = [];
    dFS(matrix, 0, 0, seen, values);
    return values;
};

const matrixBFS = matrix => {
    const seen = matrix.map((_, i) => matrix[i].map(_ => false));
    const values = [];
    const q = [[0, 0]];
    seen[0][0] = true;

    while (q.length) {
        const [i, j] = q.shift();
        values.push(matrix[i][j]);

        for (const [d1, d2] of directions) {
            const newI = i + d1;
            const newJ = j + d2;
            if (isValidCoordinate(matrix, newI, newJ)) {
                if (!seen[newI][newJ]) {
                    q.push([newI, newJ]);
                    seen[newI][newJ] = true;
                }
            }
        }
    }

    return values;
};
