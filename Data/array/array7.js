/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    const sortedNums = [...nums].sort((a, b) => a - b);
    for (let i = 0; i < nums.length; i++) {
        if (sortedNums[i] === sortedNums[i+1]) return true;
    }
    return false;
};