// Given two strings s and t, return true if t is an anagram of s, and false otherwise.

// An Anagram is a word or phrase formed by rearranging the letters of a
// different word or phrase, typically using all the original letters exactly once.

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
    if (!array.length) return array;
    if (array.length === 1) return array;
    const middle = Math.floor(array.length / 2);
    return merge(
        mergeSort(array.slice(0, middle)),
        mergeSort(array.slice(middle))
    );
};

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
    if (s.length !== t.length) return false;
    const firstWordArr = [...s];
    const secondWordArr = [...t];
    const firstSortedArrStr = JSON.stringify(mergeSort(firstWordArr));
    const secondSortedArrStr = JSON.stringify(mergeSort(secondWordArr));
    return firstSortedArrStr === secondSortedArrStr;
};
