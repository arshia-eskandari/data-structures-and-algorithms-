console.log("hi");

const logAllPairsOfArr = (arr) => {
  arr.forEach((item1, i) => {
    arr.forEach((item2, j) => {
      if (i !== j && i < j) {
        console.log(`(${item1}, ${item2})`);
      }
    });
  });
};

logAllPairsOfArr([1, 2, 3, 4, 5]) // O(n^2) BAD
