// The count-and-say sequence is a sequence of digit strings defined by the
// recursive formula:

// countAndSay(1) = "1"
// countAndSay(n) is the way you would "say" the digit string from countAndSay(n-1),
// which is then converted into a different digit string.
// To determine how you "say" a digit string, split it into the minimal number of
// substrings such that each substring contains exactly one unique digit. Then for
// each substring, say the number of digits, then say the digit. Finally,
// concatenate every said digit.

/**
 * @param {number} n
 * @return {string}
 */
var countAndSay = function (n) {
    if (n === 1) return '1';

    let currentNum = 2;
    let countAndSayStr = '11';

    while (currentNum < n) {
        let countObj = {};
        let newStr = '';
        let current = countAndSayStr[0];
        countObj[current] = 1;
        for (let i = 1; i < countAndSayStr.length; i++) {
            if (countAndSayStr[i] !== current) {
                newStr += `${countObj[current]}${current}`;
                current = countAndSayStr[i];
                countObj[current] = 0;
            }
            if (i === countAndSayStr.length - 1) {
                countObj[current]++;
                newStr += `${countObj[current]}${current}`;
            } else {
                countObj[current]++;
            }
        }
        countAndSayStr = newStr;
        currentNum++;
    }
    return countAndSayStr;
};
