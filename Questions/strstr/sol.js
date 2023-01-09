// Given two strings needle and haystack, return the
// index of the first occurrence of needle in haystack,
// or -1 if needle is not part of haystack.

/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function (haystack, needle) {
    let len = needle.length;
    if (!needle || !len) {
        return -1;
    }

    for (let i = 0; i < haystack.length; i++) {
        // for (let j = 0; j < needle.length; j++) {
        //     if (needle[j] !== haystack[j + i]) break;
        //     else if (j === needle.length - 1) return i;
        // }
        if (haystack.slice(i, i + len) === needle) {
            return i;
        }
    }
    return -1;
};
