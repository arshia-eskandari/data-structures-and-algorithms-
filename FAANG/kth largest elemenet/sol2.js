const quickSelect = (array, left, right, k) => {
    if (left < right) {
        const partitionIdx = partition(array, left, right);
        if (partition === k) {
            return array[partitionIdx];
        } else if (k < partitionIdx) {
            quickSelect(array, left, partitionIdx - 1, k);
        } else {
            quickSelect(array, partitionIdx + 1, right, k);
        }
    }
};

const partition = (array, left, right) => {
    const pivot = array[right];
    let partitionIdx = left;

    for (let i = left; i < right; i++) {
        if (array[i] <= pivot) {
            swap(array, partitionIdx, i);
            partitionIdx++;
        }
    }
    swap(array, partitionIdx, right);

    return partitionIdx;
};

const swap = (array, i, j) => {
    [array[i], array[j]] = [array[j], array[i]];
};

const findKthLargest = (nums, k) => {
    const indexToFind = nums.length - k;
    quickSelect(nums, 0, nums.length - 1, indexToFind);
    return nums[indexToFind];
};
