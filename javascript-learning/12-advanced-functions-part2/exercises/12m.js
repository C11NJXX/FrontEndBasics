function addNum(array, num) {
    return array.map(value => value + num);
}

console.log(addNum([1, 2, 3], 2));
console.log(addNum([-2, -1, 0, 99], 2));