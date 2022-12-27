// Write an algorithm to determine if a number n is happy.
// A happy number is a number defined by the following process:
// Starting with any positive integer, replace the number by the sum 
// of the squares of its digits.
// Repeat the process until the number equals 1 (where it will stay), 
// or it loops endlessly in a cycle which does not include 1.
// Those numbers for which this process ends in 1 are happy.
// Return true if n is a happy number, and false if not.

/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function (n) {
    const cache = {};

    let currentNum = `${n}`;
    let digitPlace = currentNum.length - 1;
    let currentSum = 0;

    while (true) {
        if (digitPlace > -1) {
            const digit = parseInt(currentNum[digitPlace]);
            currentSum += digit ** 2;
            digitPlace--;
        } else {
            if (cache[currentSum]) return false;
            if (currentSum === 1) return true;
            cache[currentSum] = true;
            currentNum = `${currentSum}`;
            digitPlace = currentNum.length - 1;
            currentSum = 0;
        }
    }
};
