const countPositive = (numbers) => {
    let count = 0;
    numbers.forEach(value => {
        if (value > 0) count++;
    });
    return count;
}

console.log(countPositive([1, -3, 5]));
console.log(countPositive([-2, 3, -5, 7, 10]));