/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfThree = function(n) {
    if (n === 0) return false;
    let currentNum = n;
    while (true) {
        if (currentNum % 3 === 0) {
            currentNum = currentNum / 3;
        } else {
            if (currentNum === 1) return true;
            else return false;
        }
    }
};