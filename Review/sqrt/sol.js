// Given a non-negative integer x, return the square root of x
// rounded down to the nearest integer. The returned integer
// should be non-negative as well.

var mySqrt = function (x) {
    if (x === 0 || x === 1) return x;
    if (x === 2) return 1;
    let left = 0;
    let right = x;
    let mid = Math.floor(x / 2);
    let midSquared = Math.floor(mid * mid);
    while (midSquared !== x) {
        if (midSquared > x) right = mid;
        else left = mid;
        mid = (left + right) / 2;
        midSquared = Math.floor(mid * mid);
    }
    return Math.floor(mid);
};
