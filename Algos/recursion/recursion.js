const findFactorialRecursively = num => {
    if (num === 2) {
        // save one function call
        return 2;
    }
    return findFactorialRecursively(num - 1) * num;
};

const findFactorialIteratively = num => {
    let result = 1;
    let currentNum = num;
    while (currentNum > 1) {
        result *= currentNum;
        currentNum--;
    }
    return result;
};

const fibonacciRecursively = index => {
    if (index === 0) return 0;
    if (index === 1) return 1;
    return fibonacciRecursively(index - 1) + fibonacciRecursively(index - 2);
};

const fibonacciIteratively = index => {
    if (index === 0) return 0;
    if (index === 1) return 1;
    let nMinusTwoTerm = 0;
    let nMinusOneTerm = 1;
    let currentIndex = 0;
    while (currentIndex < index) {
        [nMinusTwoTerm, nMinusOneTerm] = [
            nMinusOneTerm,
            nMinusOneTerm + nMinusTwoTerm,
        ];
        currentIndex++;
    }
    return nMinusOneTerm + nMinusTwoTerm;
};

const reverseString = str => {
    if (str.length === 0) return '';
    if (str.length === 1) return str;
    return reverseString(str.slice(1)) + str.slice(0, 1);
};
