const merge = (left, right) => {
    const result = [];
    let leftIndex = 0;
    let rightIndex = 0;
    while (true) {
        if (left[leftIndex] === undefined && right[rightIndex] === undefined)
            break;
        if (left[leftIndex] === undefined) {
            result.push(right[rightIndex]);
            rightIndex++;
            continue;
        }
        if (right[rightIndex] === undefined) {
            result.push(left[leftIndex]);
            leftIndex++;
            continue;
        }
        if (left[leftIndex] < right[rightIndex]) {
            result.push(left[leftIndex]);
            leftIndex++;
        } else {
            result.push(right[rightIndex]);
            rightIndex++;
        }
    }
    return result;
};

const mergeSort = array => {
    if (array.length === 0) return array;
    if (array.length === 1) return array;

    const middle = Math.floor(array.length / 2);
    return merge(
        mergeSort(array.slice(0, middle)),
        mergeSort(array.slice(middle))
    );
};
