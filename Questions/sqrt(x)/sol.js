// Given a non-negative integer x, return the square root of x
// rounded down to the nearest integer. The returned integer
// should be non-negative as well.

// You must not use any built-in exponent function or operator.

/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function (x) {
    if (x === 0 || x === 1 || x === 2) return x;
    let left = 0;
    let right = Math.round(x / 2);
    let mid = (left + right) / 2;
    while (Math.round(mid * mid) !== x) {
        if (Math.round(mid * mid) > x) right = mid;
        else left = mid;
        mid = (left + right) / 2;
    }
    return Math.round(mid);
};
