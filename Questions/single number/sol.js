// Given a non-empty array of integers nums, every element appears
// twice except for one. Find that single one.
// You must implement a solution with a linear runtime complexity
// and use only constant extra space.

/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function (nums) {
    const singleAppearTracker = {};
    for (let i = 0; i < nums.length; i++) {
        const num = nums[i];
        if (!singleAppearTracker[num]) {
            singleAppearTracker[num] = 1;
        } else {
            singleAppearTracker[num]++;
        }
    }
    for (const key in singleAppearTracker) {
        if (singleAppearTracker[key] === 1) return key;
    }
};
