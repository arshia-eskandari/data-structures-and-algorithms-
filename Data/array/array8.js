/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function(nums, k) {
    const numsCopy = [...nums];
    const len = nums.length;
    for (let i = 0; i < len; i++) {
        nums[(i + k) % len] = numsCopy[i];
    }
};