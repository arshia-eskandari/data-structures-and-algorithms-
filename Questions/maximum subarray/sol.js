// Given an integer array nums, find the subarray
//  which has the largest sum and return its sum.

/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
    let max = nums[0];
    let maxSoFar = max;
    for(let i=1;i<nums.length;i++){
        max = max < 0 ? nums[i] : nums[i]+max;
        maxSoFar = Math.max(maxSoFar, max);
    }
    return maxSoFar;
};