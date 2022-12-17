// const insert = (array, item) => {
//     const arrayToReturn = new Array(array.length + 1);
//     let itemPlaced = false;
//     for (let i = 0; i < array.length; i++) {
//         if (!itemPlaced && array[i] > item) {
//             arrayToReturn[i] = item;
//             arrayToReturn[i + 1] = array[i];
//             itemPlaced = true;
//         } else if (itemPlaced) {
//             arrayToReturn[i + 1] = array[i];
//         } else {
//             arrayToReturn[i] = array[i];
//         }
//     }
//     return arrayToReturn;
// };

const insertionSort = array => {
    const length = array.length;
    for (let i = 0; i < length; i++) {
        if (array[i] < array[0]) {
            //move number to the first position
            array.unshift(array.splice(i, 1)[0]);
        } else {
            // only sort number smaller than number on the left of it. This is the part of insertion sort that makes it fast if the array is almost sorted.
            if (array[i] < array[i - 1]) {
                //find where number should go
                for (let j = 1; j < i; j++) {
                    if (array[i] >= array[j - 1] && array[i] < array[j]) {
                        //move number to the right spot
                        array.splice(j, 0, array.splice(i, 1)[0]);
                    }
                }
            }
        }
    }
};
