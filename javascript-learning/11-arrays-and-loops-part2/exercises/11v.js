function fizzBuzz() {
    const res = [];
    for (let i = 1; i <= 20; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            res.push('FizzBuzz');
        } else if (i % 3 === 0) {
            res.push('Fizz');
        } else if (i % 5 === 0) {
            res.push('Buzz');
        } else {
            res.push(i);
        }
    }
    return res;
}

const res = fizzBuzz();
console.log(res);