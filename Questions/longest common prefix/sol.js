// Write a function to find the longest common prefix string
// amongst an array of strings.

// If there is no common prefix, return an empty string "".

/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
    if (strs.length === 0) return '';

    for (let i = 0; i < strs[0].length; ++i)
        for (let j = 1; j < strs.length; ++j)
            if (i === strs[j].length || strs[j][i] !== strs[0][i])
                return strs[0].substring(0, i);

    return strs[0];
};
