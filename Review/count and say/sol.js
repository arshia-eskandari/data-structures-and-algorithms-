// The count-and-say sequence is a sequence of digit strings defined
// by the recursive formula:

// countAndSay(1) = "1"
// countAndSay(n) is the way you would "say" the digit string from
// countAndSay(n-1), which is then converted into a different digit string.
// To determine how you "say" a digit string, split it into the minimal
// number of substrings such that each substring contains exactly one unique
// digit. Then for each substring, say the number of digits, then say the digit.
// Finally, concatenate every said digit.

var countAndSay = function (n) {
    if (n === 1) return '1';
    let iterationNum = n - 1;
    let str = '1';
    let countObj = {};
    while (iterationNum > 0) {
        let newStr = '';
        for (let i = 0; i < str.length; i++) {
            if (str[i] in countObj) countObj[str[i]]++;
            else countObj[str[i]] = 1;

            if (str[i] !== str[i + 1]) {
                newStr += `${countObj[str[i]]}${str[i]}`;
                countObj = {};
            }
        }
        str = newStr;
        iterationNum--;
    }
    return str;
};
