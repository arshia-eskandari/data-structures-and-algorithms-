// Given two integers a and b, return the
// sum of the two integers without using the operators + and -.

/**
 * @param {number} a
 * @param {number} b
 * @return {number}
 */
var getSum = function (a, b) {
    let biggerMag, smallerMag;
    if (Math.abs(a) > Math.abs(b)) {
        biggerMag = a;
        smallerMag = b;
    } else {
        biggerMag = b;
        smallerMag = a;
    }
    const array1 = new Array(Math.abs(biggerMag)).fill(1, 0);
    const array2 = new Array(Math.abs(smallerMag)).fill(1, 0);
    if (biggerMag < 0) {
        array2.forEach(item =>
            smallerMag > 0 ? array1.pop() : smallerMag && array1.push(item)
        );
        return -array1.length;
    } else {
        array2.forEach(item =>
            smallerMag < 0 ? smallerMag && array1.pop() : array1.push(item)
        );
        return array1.length;
    }
};
