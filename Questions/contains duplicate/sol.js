// Given an integer array nums, return true if any 
// value appears at least twice in the array, 
// and return false if every element is distinct.

/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    const countObj = {};
    for (let i = 0; i < nums.length; i++) {
        if (!countObj[nums[i]]) {
            countObj[nums[i]] = 1;
        } else {
            countObj[nums[i]]++;
        }

        if (countObj[nums[i]] > 1) return true;
    }
    return false;
};