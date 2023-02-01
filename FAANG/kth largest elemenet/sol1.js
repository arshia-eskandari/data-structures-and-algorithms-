// solution 1
const quickSort = (array, left, right) => {
    if (left < right) {
        const partitionIdx = partition(array, left, right);
        quickSort(array, left, partitionIdx - 1);
        quickSort(array, partitionIdx + 1, right);
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
    quickSort(nums, 0, nums.length - 1);
    return nums[indexToFind];
};