const selectSort = array => {
    if (!array.length) return;
    if (array.length === 1) return array;
    for (let i = 0; i < array.length; i++) {
        let indexToSwap = i;
        for (let j = i + 1; j < array.length; j++) {
            if (array[indexToSwap] > array[j]) {
                indexToSwap = j;
            }
        }
        [array[i], array[indexToSwap]] = [array[indexToSwap], array[i]];
    }
    return array;
};
