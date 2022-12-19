// Roman numerals are represented by seven
//  different symbols: I, V, X, L, C, D and M.
// Symbol       Value
// I             1
// V             5
// X             10
// L             50
// C             100
// D             500
// M             1000

/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (s) {
    const symbolToVal = {
        I: 1,
        IV: 4,
        V: 5,
        IX: 9,
        X: 10,
        XL: 40,
        L: 50,
        XC: 90,
        C: 100,
        CD: 400,
        D: 500,
        CM: 900,
        M: 1000,
    };
    let i = s.length - 1;
    let num = 0;
    while (i > -1) {
        const pair = s[i - 1] + s[i];
        if (symbolToVal[pair]) {
            num += symbolToVal[pair];
            i -= 2;
        } else {
            num += symbolToVal[s[i]];
            i--;
        }
    }
    return num;
};
