// /**
//  * @param {number[]} nums
//  * @return {number}
//  */
// var maxSubArray = function (nums) {
//     if (nums.length === 1) return nums[0];
//     const subArrs = [...nums.map(i => [i])];
//     let subArrLength = 2;
//     while (subArrLength <= nums.length) {
//         let i = 0;
//         while (i + subArrLength <= nums.length) {
//             subArrs.push(nums.slice(i, i + subArrLength));
//             i++;
//         }
//         subArrLength++;
//     }
//     return subArrs
//         .map(arr => arr.reduce((acc, num) => acc + num), 0)
//         .sort(function (a, b) {
//             return b - a;
//         })[0];
// };

/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
    let max = nums[0];
    let maxSoFar = max;
    for (let i = 1; i < nums.length; i++) {
        max = max < 0 ? nums[i] : nums[i] + max;
        maxSoFar = Math.max(maxSoFar, max);
    }
    return maxSoFar;
};

console.log(maxSubArray([5, 4, -1, 7, 8]));
