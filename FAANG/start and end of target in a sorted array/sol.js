const binarySearch = (array, target, l, r) => {
    while (l <= r) {
        const mid = Math.floor((l + r) / 2);
        const foundVal = array[mid];
        if (foundVal === target) {
            return mid;
        } else if (foundVal < target) {
            l = mid + 1;
        } else {
            r = mid - 1;
        }
    }

    return -1;
};

const searchRange = (nums, target) => {
    if (!nums.length) return [-1, -1];
    const idx = binarySearch(nums, target, 0, nums.length - 1);
    let i = idx;
    while (nums[i - 1] === target) i--;
    let j = i;
    while (nums[j + 1] === target) j++;
    return [i, j];
};
