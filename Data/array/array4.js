const binarySearch = (arr, item) => {
    const arrLen = arr.length;
    const midpoint = Math.floor(arrLen / 2);
    if (arrLen === 1) {
        if (item === arr[0]) return true;
        return false;
    }
    if (arrLen === 2) {
        if (item === arr[0]) return true;
        if (item === arr[1]) return true;
        return false;
    }

    if (item > arr[midpoint]) {
        return binarySearch(arr.slice(midpoint + 1), item);
    } else {
        return binarySearch(arr.slice(0, midpoint + 1), item);
    }
};

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
    let firstNum, secondNum, firstNumIndex, secondNumIndex;
    const newNums = [...nums].sort(function (a, b) {
        return a - b;
    });
    for (let i = 0; i < nums.length; i++) {
        const neededNum = target - newNums[i];
        const found = binarySearch(newNums, neededNum);
        if (found) {
            if (neededNum === newNums[i] && neededNum !== newNums[i + 1])
                continue;
            secondNum = neededNum;
            firstNum = newNums[i];
            break;
        }
    }
    for (let j = 0; j < nums.length; j++) {
        if (nums[j] === firstNum && firstNumIndex === undefined) {
            firstNumIndex = j;
        }
        if (nums[j] === secondNum && j !== firstNumIndex) {
            secondNumIndex = j;
        }
    }
    return [firstNumIndex, secondNumIndex];
};

console.log(twoSum([3, 3], 6));
