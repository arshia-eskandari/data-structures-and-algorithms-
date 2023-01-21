var isValid = function (s) {
    const closingArray = [];

    for (let i = 0; i < s.length; i++) {
        if (s[i] === '(') closingArray.push(')');
        else if (s[i] === '[') closingArray.push(']');
        else if (s[i] === '{') closingArray.push('}');
        else if (
            s.length === 0 ||
            closingArray[closingArray.length - 1] !== s[i]
        )
            return false;
        else closingArray.pop();
    }

    if (closingArray.length > 0) return false;
    return true;
};
