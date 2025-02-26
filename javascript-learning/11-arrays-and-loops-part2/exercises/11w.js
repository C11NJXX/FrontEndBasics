function checkIfStringExists(string, array) {
    for (let i = 0; i < array.length; i++) {
        if (array[i] === string) {
            return i;
        }
    }
    return -1;
}

function unique(array) {
    const res = [];
    for (let i = 0; i < array.length; i++) {
        if (checkIfStringExists(array[i], res) === -1) {
            res.push(array[i]);
        } else {
            continue;
        }
    }
    return res;
}

// console.log(checkIfStringExists('search', ['hello', 'search', 'world', 'search']));
// console.log(checkIfStringExists('search', ['hi']));

const res = unique(['green', 'red', 'blue', 'red']);
console.log(res);