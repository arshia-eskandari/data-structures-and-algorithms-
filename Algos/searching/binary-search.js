const binarySearch = (array, item) => {
    const arrLen = array.length;
    const midpoint = Math.floor(arrLen / 2);

    if (arrLen === 1) {
        if (item === array[0]) return true;
        return false;
    }
    if (arrLen === 2) {
        if (item === array[0]) return true;
        if (item === array[1]) return true;
        return false;
    }

    if (item > array[midpoint]) {
        return binarySearch(array.slice(midpoint + 1), item);
    } else {
        return binarySearch(array.slice(0, midpoint + 1), item);
    }
};
