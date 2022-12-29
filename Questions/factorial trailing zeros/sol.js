// Given an integer n, return the number of trailing zeroes in n!.

/**
 * @param {number} n
 * @return {number}
 */
var trailingZeroes = function (n) {
    let multipleOfFive = 5;
    let numOfTrailingZeros = 0;

    while (multipleOfFive <= n) {
        let currentMultiple = multipleOfFive;
        while (currentMultiple % 5 === 0 && currentMultiple >= 5) {
            numOfTrailingZeros++;
            currentMultiple /= 5;
        }
        multipleOfFive += 5;
    }
    return numOfTrailingZeros;
};
