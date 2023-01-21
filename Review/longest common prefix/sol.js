// Write a function to find the longest common prefix string amongst an array of strings.

// If there is no common prefix, return an empty string "".

var longestCommonPrefix = function (strs) {
    if (strs.length === 0) return '';
    let commonPrefixSoFar = strs[0];

    for (let str of strs) {
        let newPrefix = '';
        for (let i = 0; i < str.length; i++) {
            if (commonPrefixSoFar[i] === str[i]) newPrefix += str[i];
            else break;
        }
        if (!newPrefix) return '';
        commonPrefixSoFar = newPrefix;
    }

    return commonPrefixSoFar;
};
