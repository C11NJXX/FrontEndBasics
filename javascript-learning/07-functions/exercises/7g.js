function convertLength(length, from, to) {
    if (from === 'miles' && to === 'km') {
        return length * 1.6 + ' km';
    } else if (from === 'km' && to === 'miles') {
        return length / 1.6 + ' miles';
    } else if (from === to) {
        return length + ' ' + from;
    } else {
        console.log('please enter valid parameters')
    }
}

console.log(convertLength(50, 'miles', 'km'));
console.log(convertLength(32, 'km', 'miles'));
console.log(convertLength(50, 'km', 'km'));
console.log(convertLength(50, 'miles', 'miles'));
console.log(convertLength(123, '111', '222'));