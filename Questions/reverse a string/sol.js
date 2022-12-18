// Write a function that reverses a string. The input string is given as an array of characters s.
// You must do this by modifying the input array in-place with O(1) extra memory.

/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function (s) {
    const charArr = [...s];
    const charArrLen = charArr.length;
    let strToReturn = '';
    for (let i = charArrLen - 1; i > -1; i--) {
        strToReturn += charArr[i];
    }
    return strToReturn;
};
