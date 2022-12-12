const mergeSortedArrats = (arr1, arr2) => {
    const mergedArray = [];
    let i = 0;
    let j = 0;
    const arr1Len = arr1.length;
    const arr2Len = arr2.length;
    let array1Item = arr1[i];
    let array2Item = arr2[j];

    if (!arr2) return arr1;
    if (!arr1) return arr2;

    while (true) {
        if (array1Item < array2Item) {
            mergedArray.push(array1Item);
            array1Item = arr1[++i];
        } else {
            mergedArray.push(array2Item);
            array2Item = arr2[++j];
        }
        if (arr1Len === i && arr2Len === j) break;
    }

    return mergedArray;
};

console.log(mergeSortedArrats([1, 2, 5], [4, 5, 6, 7, 11]));
