const getMax = (arr, n) => {
    let mx = arr[0];
    for (let i = 1; i < n; i++) if (arr[i] > mx) mx = arr[i];
    return mx;
};

const countSort = (arr, n, exp) => {
    let output = new Array(n);
    let i;
    let count = new Array(10);
    for (let i = 0; i < 10; i++) count[i] = 0;
    for (i = 0; i < n; i++) count[Math.floor(arr[i] / exp) % 10]++;
    for (i = 1; i < 10; i++) count[i] += count[i - 1];
    for (i = n - 1; i >= 0; i--) {
        output[count[Math.floor(arr[i] / exp) % 10] - 1] = arr[i];
        count[Math.floor(arr[i] / exp) % 10]--;
    }
    for (i = 0; i < n; i++) arr[i] = output[i];
};

const radixsort = (arr, n) => {
    let m = getMax(arr, n);
    for (let exp = 1; Math.floor(m / exp) > 0; exp *= 10)
        countSort(arr, n, exp);
};

const print = (arr, n) => {
    for (let i = 0; i < n; i++) document.write(arr[i] + ' ');
};
