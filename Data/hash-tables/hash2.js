const firstRecurringItem = array => {
    const counterObj = {};
    for (let i = 0; i < array.length; i++) {
        if (counterObj[array[i]]) return array[i];
        counterObj[array[i]] = true;
    }
    return undefined;
};

console.log(firstRecurringItem([2, 5, 1, 2, 3, 5, 1, 2, 4]));
console.log(firstRecurringItem([2, 1, 1, 2, 3, 5, 1, 2, 4]));
console.log(firstRecurringItem([1, 2, 3, 4]));
