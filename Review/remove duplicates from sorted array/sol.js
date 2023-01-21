// Given an integer array nums sorted in non-decreasing order,
//  remove the duplicates in-place such that each unique element 
//  appears only once. The relative order of the elements should be kept the same.

var removeDuplicates = function(nums) {
    let i = 0;
    let j = 0;
    while (j < nums.length) {
        if (i < nums.length && nums[i] === nums[i+1]) {
            i++;
            continue;
        }
        if (nums[i] === undefined) {
            nums.pop();
            continue;
        }
        nums[j] = nums[i];
        i++;
        j++;
    }
}