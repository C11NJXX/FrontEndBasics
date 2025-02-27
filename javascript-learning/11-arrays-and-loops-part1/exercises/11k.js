function countPositive(array) {
    let number = 0;
    for (let i = 0; i < array.length; i++) {
        if (array[i] > 0) {
            number++;
        }
    }
    return number;
}

console.log(countPositive([1, -3, 5]));
console.log(countPositive([-2, 3, -5, 7, 10]));