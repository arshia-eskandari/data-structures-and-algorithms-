// Given n non-negative integers representing an elevation
// map where the width of each bar is 1,
// compute how much water it can trap after raining.

var trap = function(height) {
    let leftMax, rightMax, i, res;
    let j = height.length - 1;
    leftMax = rightMax = i = res = 0;

    while (i <= j) {
        if (leftMax <= rightMax) {
            if (leftMax <= height[i]) leftMax = height[i];
            else res += Math.min(leftMax, rightMax) - height[i];
            i += 1;
        } else {
            if (rightMax <= height[j]) rightMax = height[j];
            else res += Math.min(rightMax, leftMax) - height[j];
            j -= 1;
        }
    }

    return res;
};


// const findMax = array => {
//     let max = array[0];
//     for (let i = 1; i < array.length; i++) if (array[i] > max) max = array[i];
//     return max;
// };

// const countWaterBlock = (array, count) => {
//     let hasOpening = false;
//     let blockCount = 0;
//     let countToAdd = 0;
//     for (let i = 0; i < array.length; i++) {
//         if (!hasOpening && array[i] === 1) {
//             hasOpening = true;
//             continue;
//         }
//         if (hasOpening && array[i] === 1 && blockCount > 0) {
//             countToAdd += blockCount;
//             blockCount = 0;
//             continue;
//         }
//         if (hasOpening && array[i] === 0) blockCount++;
//     }
//     count.count += countToAdd;
// };

// var trap = function (height) {
//     if (!height.length) return 0;
//     if (height.length === 1) return 0;
//     const maxHeight = findMax(height);
//     const width = height.length;
//     const matrixRep = Array.from({ length: maxHeight }, (_, i) =>
//         Array.from({ length: width }, (_, j) =>
//             height[j] - maxHeight + i < 0 ? 0 : 1
//         )
//     );
//     const waterBlockCount = { count: 0 };
//     for (const row of matrixRep) countWaterBlock(row, waterBlockCount);
//     return waterBlockCount.count;
// };
