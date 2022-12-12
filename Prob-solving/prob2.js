const hasSharedElemenets = (arr1, arr2) => {
    const arr1Obj = {};
    for (let i = 0; i < arr1.length; i++) {
        if (!arr1Obj[arr1[i]]) arr1Obj[arr1[i]] = true;
    }
    for (let j = 0; j < arr2.length; j++) {
        if (arr1Obj[arr2[j]]) {
            return true;
        }
    }
    return false;
}

console.log(hasSharedElemenets([1, 2, 3], [4, 5, 6]));
console.log(hasSharedElemenets([1, 2, 3], [3, 4, 5, 6]));