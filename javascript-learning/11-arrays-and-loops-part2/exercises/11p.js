function checkIfStringExists(string, array) {
    for (let i = 0; i < array.length; i++) {
        if (array[i] === string) {
            return i;
        }
    }
    return -1;
}

console.log(checkIfStringExists('search', ['hello', 'search', 'world', 'search']));
console.log(checkIfStringExists('search', ['hi']));