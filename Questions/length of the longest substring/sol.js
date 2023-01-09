var lengthOfLongestSubstring = function (s) {
    if (s.length === 0 || s.length === 1) return s.length;
    let currentSubStr = '';
    let subStrToReturn = '';
    let repeated = {};
    let i = 0;
    while (i <= s.length) {
        if (i === s.length) {
            if (subStrToReturn.length < currentSubStr.length)
                subStrToReturn = currentSubStr;
            break;
        }
        if (s[i] in repeated) {
            i = repeated[s[i]] + 1;
            repeated = {};
            if (subStrToReturn.length < currentSubStr.length)
                subStrToReturn = currentSubStr;
            currentSubStr = '';
        } else {
            repeated[s[i]] = i;
            currentSubStr += s[i];
            i++;
        }
    }
    return subStrToReturn.length;
};
