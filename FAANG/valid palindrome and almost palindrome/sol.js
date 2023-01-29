const isPalindromeCenter = function (s) {
    s = s.replace(/[^A-Za-z0-9]/g, '').toLowerCase();
    let l, r;
    if (s.length % 2 === 0) {
        l = s.length / 2 - 1;
        r = l + 1;
    } else {
        l = r = Math.floor(s.length / 2);
    }

    while (l > -1 || r < s.length) {
        if (s[l] !== s[r]) return false;
        l--;
        r++;
    }

    return true;
};

const isPalindromeLR = function (s) {
    s = s.toLowerCase();
    let l = 0;
    let r = s.length - 1;
    const alphaNumeric = /^[0-9a-zA-Z]+$/;

    while (l <= r) {
        while (s[l] && !s[l].match(alphaNumeric)) l++;
        while (s[r] && !s[r].match(alphaNumeric)) r--;

        if (s[l] !== s[r]) return false;
        l++;
        r--;
    }

    return true;
};

const isPalindrome = function (s, left, right) {
    let l = left;
    let r = right;

    while (l <= r) {
        if (s[l] !== s[r]) return false;
        l++;
        r--;
    }

    return true;
};

const validPalindrome = function (s) {
    s = s.replace(/[^A-Za-z0-9]/g, '').toLowerCase();
    let l = 0;
    let r = s.length - 1;

    while (l <= r) {
        if (s[l] !== s[r]) {
            return isPalindrome(s, l + 1, r) || isPalindrome(s, l, r - 1);
        }
        l++;
        r--;
    }
    return true;
};
