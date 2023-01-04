// Given a signed 32-bit integer x, return x with its digits reversed.
// If reversing x causes the value to go outside the signed 32-bit integer
// range [-231, 231 - 1], then return 0.

// Assume the environment does not allow you to store 64-bit
// integers (signed or unsigned).

/**
 * @param {number} x
 * @return {number}
 */
var reverse = function (x) {
    let numToMultiply = 1;
    const max = 2_147_483_647;
    const min = -2_147_483_648;
    const absVal = Math.abs(x);
    if (x < 0) numToMultiply *= -1;
    const digitArray = [...`${absVal}`];
    let newNumStr = "";
    for (let i = digitArray.length - 1; i > -1; i--) {
        newNumStr += digitArray[i];
    }
    const num = +newNumStr;
    if (num > max || num < min) return 0;
    else return num * numToMultiply;
};
