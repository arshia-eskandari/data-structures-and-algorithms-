// Given a string s, find the first non-repeating character in it and
// return its index. If it does not exist, return -1.

/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(s) {
    const uniqueChars = {};
    const visited = {};
    for (let i = 0; i < s.length; i++) {
        if (visited[s[i]]) delete uniqueChars[s[i]];
        else uniqueChars[s[i]] = i;
        visited[s[i]] = true
    }
    if (Object.keys(uniqueChars).length === 0) return -1;
    let min;
    for (let key of Object.keys(uniqueChars)) {
        if (min === undefined) min = uniqueChars[key];
        if (min > uniqueChars[key]) min = uniqueChars[key];
    }
    return min;
}

// var firstUniqChar = function (s) {
//     const countObj = {};
//     let key;
//     for (let i = 0; i < s.length; i++) {
//         if (s[i] in countObj) countObj[s[i]] = null;
//         else countObj[s[i]] = i;
//     }
//     let min;
//     for (const [_, value] of Object.entries(countObj)) {
//         if (min === undefined && value !== null) min = value;
//         if (value !== null && min > value) min = value;
//     }
//     if (min === 0) return min;
//     return min || -1;
// };
