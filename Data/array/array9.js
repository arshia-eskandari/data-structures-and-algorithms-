function LongestWord(sen) {
    // code goes here
    const senArr = [...sen];
    let max = 0;
    let currentSum = 0;
    let maxStart = 0;
    senArr.forEach((char, i) => {
        if (/[a-zA-Z]/.test(char)) {
            currentSum++;
        } else {
            if (currentSum > max) {
                max = currentSum;
                maxStart = i - max;
            } else {
                maxStart = i + 1;
            }
            currentSum = 0;
        }
        if (i === sen.length - 1) {
            if (currentSum > max) max = currentSum;
        }
        console.log(char, `index: ${i}`, `max: ${max}`, `cur: ${currentSum}`);
    });
    return sen.slice(maxStart, maxStart + max);
}

console.log(LongestWord('I love dogs'));
