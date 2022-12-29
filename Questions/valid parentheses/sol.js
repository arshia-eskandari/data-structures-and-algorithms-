// Given a string s containing just the characters '(', ')', '{', '}', '[' and ']',
// determine if the input string is valid.

// An input string is valid if:

// Open brackets must be closed by the same type of brackets.
// Open brackets must be closed in the correct order.
// Every close bracket has a corresponding open bracket of the same type.

/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
    var array = [];
    s = s.split('');
    for (let i = 0; i < s.length; i++) {
        if (s[i] === '(') array.push(')');
        else if (s[i] === '[') array.push(']');
        else if (s[i] === '{') array.push('}');
        else if (s.length === 0 || array[array.length - 1] !== s[i])
            return false;
        else array.pop();
    }
    return array.length === 0;
};
