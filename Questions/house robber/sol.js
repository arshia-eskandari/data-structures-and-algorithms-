/**
 * @param {number[]} nums
 * @return {number}
 */

// [1, 2, 4, 5, 6, 7, 3]
let rob = function(nums) {
    let previous = 0;
    let current = 0;
    let temp;
    for (let x of nums) {
        temp = current;
        current = Math.max(x+previous, current);
        previous = temp;
    }
    return current;
}