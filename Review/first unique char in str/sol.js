// Given a string s, find the first non-repeating
// character in it and return its index. If it does not exist, return -1.

var firstUniqChar = function (s) {
    const uniqueChars = {};
    const visited = {};
    for (let i = 0; i < s.length; i++) {
        if (visited[s[i]]) delete uniqueChars[s[i]];
        else uniqueChars[s[i]] = i;
        visited[s[i]] = true;
    }
    if (Object.keys(uniqueChars).length === 0) return -1;
    let min;
    for (let key of Object.keys(uniqueChars)) {
        if (min === undefined) min = uniqueChars[key];
        if (min > uniqueChars[key]) min = uniqueChars[key];
    }
    return min;
};
