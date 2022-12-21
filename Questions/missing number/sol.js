// Given an array nums containing n distinct numbers in the range [0, n], return
// the only number in the range that is missing from the array.

/**
 * @param {number[]} nums
 * @return {number}
 */
/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function (nums) {
    const sortedNums = [...nums].sort(function(a, b){return a-b});
    if (sortedNums[0] !== 0) return 0;
    for (let i = 0; i < sortedNums.length; i++) {
        if (sortedNums[i] + 1 !== sortedNums[i + 1]) return sortedNums[i] + 1;
    }
};
