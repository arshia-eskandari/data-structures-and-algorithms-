// Given an integer array nums, move all 0's to
// the end of it while maintaining the relative order of the non-zero elements.

// Note that you must do this in-place without making a copy of the array.

var moveZeroes = function (nums) {
    const indexArr = [];
    nums.forEach((num, i) => num && indexArr.push(i));
    for (let i = 0; i < nums.length; i++) {
        if (indexArr[i] !== undefined) nums[i] = nums[indexArr[i]];
        else nums[i] = 0;
    }
};
