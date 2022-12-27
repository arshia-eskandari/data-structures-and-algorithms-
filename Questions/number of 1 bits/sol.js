// Write a function that takes an unsigned integer and returns the number of
// '1' bits it has (also known as the Hamming weight).

/**
 * @param {number} n - a positive integer
 * @return {number}
 */
var hammingWeight = function (n) {
    let currentNum = n;
    let currentExponent = Math.floor(Math.log(n) / Math.log(2));
    let numOfOneBits = 0;
    while (currentNum !== 0) {
        if (currentNum >= 2 ** currentExponent) {
            currentNum -= 2 ** currentExponent;
            numOfOneBits++;
        }
        currentExponent--;
    }
    return numOfOneBits;
};
