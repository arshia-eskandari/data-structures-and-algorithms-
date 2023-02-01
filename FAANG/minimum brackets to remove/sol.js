var minRemoveToMakeValid = function (s) {
    const res = s.split('');
    const stack = [];

    for (let i = 0; i < res.length; i++) {
        if (res[i] === '(') stack.push(i);
        else if (res[i] === ')' && !stack.length) res[i] = '';
        else if (res[i] === ')') stack.pop();
    }
    for (let j = 0; j < stack.length; j++) {
        res[stack[j]] = '';
    }

    return res.join('');
};
