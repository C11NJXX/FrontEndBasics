function addNum(array, number) {
    let increaseArray = [];
    for (let i = 0; i < array.length; i++) {
        increaseArray[i] = array[i] + number;
    }
    return increaseArray;
}

console.log(addNum([1, 2, 3], 3));
console.log(addNum([-2, -1, 0, 99], -1));