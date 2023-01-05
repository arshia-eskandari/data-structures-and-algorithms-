// A phrase is a palindrome if, after converting all uppercase letters
// into lowercase letters and removing all non-alphanumeric characters,
// it reads the same forward and backward. Alphanumeric characters include
// letters and numbers.

// Given a string s, return true if it is a palindrome, or false otherwise.

/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
    if (s.length === 0 || s.length === 1) return true;
    const charArray = [...s];
    let formatedStr = '';
    for (let i = 0; i < charArray.length; i++) {
        if (charArray[i].match(/^[0-9a-zA-Z]$/))
            formatedStr += charArray[i].toLocaleLowerCase();
    }
    let l = 0;
    let r = formatedStr.length - 1;
    while (l <= r) {
        if (formatedStr[l] !== formatedStr[r]) return false;
        l++;
        r--;
    }
    return true;
};
