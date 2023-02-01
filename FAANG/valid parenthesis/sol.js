var isValid = function (s) {
    const stack = [];

    for (let i = 0; i < s.length; i++) {
        if (s[i] === '(') stack.push(')');
        else if (s[i] === '[') stack.push(']');
        else if (s[i] === '{') stack.push('}');
        else if (!stack || stack[stack.length - 1] !== s[i]) return false;
        else stack.pop();
    }

    return stack.length === 0;
};
