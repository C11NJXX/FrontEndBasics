const numberArray = [1, 20, 22, 24, 5];
const stringArray = ['hi', 'hello', 'good'];

function swapArray(array) {
    const temp = array[0];
    array[0] = array[array.length - 1];
    array[array.length - 1] = temp;
}

swapArray(numberArray);
swapArray(stringArray);
console.log(numberArray);
console.log(stringArray);