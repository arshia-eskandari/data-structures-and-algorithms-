// Given two integers a and b, return the sum of the two integers
//  without using the operators + and -.

var getSum = function (a, b) {
    let carry;
    while (a !== 0) {
        carry = a & b;
        sum = a ^ b;
        a = carry << 1;
    }
    return b;
}