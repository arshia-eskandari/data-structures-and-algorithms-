const reverse = str => {
    const strArr = [...str];
    const len = strArr.length;
    const midpoint = Math.floor(len / 2);
    for (let i = 0; i < midpoint; i++) {
        [strArr[i], strArr[len - i - 1]] = [strArr[len - i - 1], strArr[i]];
    }
    return strArr.join('');
};

console.log('Hi! My name is Arshia!');
console.log(reverse('Hi! My name is Arshia!'));
