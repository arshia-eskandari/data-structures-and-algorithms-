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

const findPair = (sum, numCollection) => {
    for (let i = 0; i < numCollection.length; i++) {
        const neededNum = sum - numCollection[i];
        if (neededNum === numCollection[i]) {
            if (numCollection[i + 1] === neededNum)
                return [numCollection[i], neededNum];
            else continue;
        }
        const found = binarySearch(numCollection, neededNum);
        if (found) {
            return `(${numCollection[i]}, ${neededNum})`;
        }
    }
    return 'No such pair exists.';
};
