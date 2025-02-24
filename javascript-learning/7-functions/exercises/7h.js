function convertLength(length, from, to) {
    if (from === 'miles' && to === 'km') {
        return length * 1.6 + ' km';
    } else if (from === 'km' && to === 'miles') {
        return length / 1.6 + ' miles';
    } else if (from === 'miles' && to === 'ft') {
        return length * 5280 + ' ft';
    } else if (from === 'ft' && to === 'miles') {
        return length / 5280 + ' miles';
    } else if (from === 'km' && to === 'ft') {
        return length * 3281 + ' ft';
    } else if (from === 'ft' && to === 'km') {
        return length / 3281 + ' km';
    } else if (from === to) {
        return length + ' ' + from;
    } else {
        console.log('please enter valid parameters')
    }
}

// console.log(convertLength(50, 'miles', 'km'));
// console.log(convertLength(32, 'km', 'miles'));
// console.log(convertLength(50, 'km', 'km'));
// console.log(convertLength(50, 'miles', 'miles'));
console.log(convertLength(5,'miles','km'));
console.log(convertLength(5,'miles','ft'));
console.log(convertLength(5,'km','ft'));
console.log(convertLength(5,'ft','ft'));