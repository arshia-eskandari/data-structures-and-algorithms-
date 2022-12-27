/**
 * @param {number[]} nums
 * @return {number}
 */

// [1, 2, 4, 5, 6, 7, 3]
var rob = function (nums) {
    if (nums.length === 0) return 0;
    if (nums.length === 1) return nums[0];
    if (nums.length === 2) {
        if (nums[0] > nums[1]) return nums[0];
        else return nums[1];
    }

    let startingIndex = 0; // 1
    let secondStartingPoint = startingIndex + 2; // 3 -> 4
    let index = secondStartingPoint;
    let max = 0;

    while (startingIndex + secondStartingPoint <= 5) {
        let currentMax = nums[startingIndex];
        while (index < nums.length) {
            currentMax += nums[index];
            index += 2;
        }
        max = Math.max(max, currentMax);
        if (startingIndex === 0) {
            if (secondStartingPoint === 2) startingIndex = 1;
            else secondStartingPoint = 2;
        }
    }
    return max;
};
