const bubbleSort = array => {
    let arrayHasChanged;
    while (true) {
        for (let i = 0; i < array.length; i++) {
            if (array[i + 1] && array[i] > array[i + 1]) {
                arrayHasChanged = true;
                [array[i], array[i + 1]] = [array[i + 1], array[i]];
            }
        }
        if (!arrayHasChanged) return array;
        arrayHasChanged = false;
    }
    return array;
};
