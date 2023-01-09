// Reverse bits of a given 32 bits unsigned integer.

/**
 * @param {number} n - a positive integer
 * @return {number} - a positive integer
 */
var reverseBits = function(n) {
    let binaryRep = (n >>> 0).toString(2);
    let currentExp = 31
    let reversedN = 0;
    for (let i = binaryRep.length - 1; i > -1; i--) {
        if (binaryRep[i] === '1') reversedN += 2 ** currentExp;
        currentExp--;
    }
    return reversedN
};