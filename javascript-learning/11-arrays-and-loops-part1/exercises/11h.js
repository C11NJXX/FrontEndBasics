function addOne(array) {
    let increaseArray = [];
    for (let i = 0; i < array.length; i++) {
        increaseArray[i] = array[i] + 1;
    }
    return increaseArray;
}

console.log(addOne([1, 2, 3]));
console.log(addOne([-2, -1, 0, 99]));