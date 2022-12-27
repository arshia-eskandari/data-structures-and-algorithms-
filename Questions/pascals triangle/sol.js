// Given an integer numRows, return the first numRows of Pascal's triangle.

// In Pascal's triangle, each number is the sum of the two numbers
// directly above it as shown:

/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function (numRows) {
    if (numRows === 1) return [[1]];
    if (numRows === 2) return [[1], [1, 1]];
    const pascalArray = [[1], [1, 1]];

    let rowNum = 2;
    while (numRows > rowNum) {
        const pascalRow = new Array(rowNum + 1);
        pascalRow[0] = 1;
        pascalRow[rowNum] = 1;
        for (let i = 0; i < rowNum; i++) {
            const currentRow = pascalArray[rowNum - 1];
            if (!currentRow[i + 1]) break;
            pascalRow[i + 1] = currentRow[i] + currentRow[i + 1];
        }
        rowNum++;
        pascalArray.push(pascalRow);
    }
    return pascalArray;
};
