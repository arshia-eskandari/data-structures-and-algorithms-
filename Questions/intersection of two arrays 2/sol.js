// Given two integer arrays nums1 and nums2, return an array of their intersection.
// Each element in the result must appear as many times as it shows in both
// arrays and you may return the result in any order.

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function (nums1, nums2) {
    const countObj1 = {};
    const intersection = [];
    for (let i = 0; i < nums1.length; i++) {
        const numKey = nums1[i];
        if (numKey in countObj1) {
            countObj1[numKey][0].push(numKey);
        } else {
            countObj1[numKey] = [];
            countObj1[numKey][0] = [numKey];
        }
    }
    for (let j = 0; j < nums2.length; j++) {
        const numKey = nums2[j];
        if (numKey in countObj1) {
            if (countObj1[numKey][1]) {
                countObj1[numKey][1].push(numKey);
            } else {
                countObj1[numKey][1] = [];
                countObj1[numKey][1] = [numKey];
            }
        }
    }
    for (let key in countObj1) {
        const value = countObj1[key];
        if (value.length === 1) continue;
        if (value[0].length > value[1].length) {
            intersection.push(...value[1]);
        } else {
            intersection.push(...value[0]);
        }
    }
    return intersection;
};
