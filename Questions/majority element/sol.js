// Given an array nums of size n, return the majority element.
// The majority element is the element that appears more than ⌊n / 2⌋ times. 
// You may assume that the majority element always exists in the array.

/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    if (nums.length === 1) return nums[0];
    const n = nums.length;
    const majorityNum = Math.floor(n / 2);
    const countObj = {};
    for (let i = 0; i < n; i++) {
        const number = nums[i];
        if (!countObj[number]) {
            countObj[number] = 1;
        } else {
            countObj[number]++;
        }
        if (countObj[number] > majorityNum) return number;
    }

};