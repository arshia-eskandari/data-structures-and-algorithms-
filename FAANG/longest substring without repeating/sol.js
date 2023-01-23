var lengthOfLongestSubstring = function (s) {
    if (s.length <= 1) return s.length;
    const seenChars = {};
    let left = 0,
        longest = 0;
    for (let right = 0; right < s.length; right++) {
        const currentChar = s[right];
        const prevSeen = seenChars[currentChar];
        if (prevSeen >= left) {
            left = prevSeen + 1;
        }
        seenChars[currentChar] = right;
        longest = Math.max(longest, right - left + 1);
    }
    return longest;
};

var lengthOfLongestSubstringBruteForce = function (s) {
    if (s.length <= 1) return s.length;
    let longest = 0;
    for (let i = 0; i < s.length; i++) {
        const visited = {};
        let currentLength = 0;
        for (let j = i; j < s.length; j++) {
            if (visited[s[j]]) break;
            currentLength++;
            visited[s[j]] = true;
        }
        longest = Math.max(longest, currentLength);
    }
    return longest;
};
