const linearSearch = (array, item) => {
    for (let i = 0; i < array.length; i++) {
        if (array[i] === item) return i;
    }
    return -1;
}