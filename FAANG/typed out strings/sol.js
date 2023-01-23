var backspaceCompare = function (s, t) {
    let sP = s.length - 1;
    let tP = t.length - 1;

    while (sP >= 0 || tP >= 0) {
        if (s[sP] === '#' || t[tP] === '#') {
            if (s[sP] === '#') {
                let backCount = 2;
                while (backCount > 0) {
                    sP--;
                    backCount--;
                    if (s[sP] === '#') backCount += 2;
                }
            }
            if (t[tP] === '#') {
                let backCount = 2;
                while (backCount > 0) {
                    tP--;
                    backCount--;
                    if (t[tP] === '#') backCount += 2;
                }
            }
        } else {
            if (s[sP] !== t[tP]) return false;
            sP--;
            tP--;
        }
    }

    return true;
};

var backspaceCompareBruteForce = function (s, t) {
    const sArr = [];
    const tArr = [];
    for (let i = 0; i < s.length; i++) {
        if (s[i] !== '#') sArr.push(s[i]);
        else if (sArr.length) sArr.pop();
    }
    for (let i = 0; i < t.length; i++) {
        if (t[i] !== '#') tArr.push(t[i]);
        else if (tArr.length) tArr.pop();
    }
    return sArr.join('') === tArr.join('');
};
