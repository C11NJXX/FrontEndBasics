function convertTemperature(degrees, unit) {
    if(unit === 'C') {
        return ((degrees * 9 / 5) + 32) + 'F';
    }else if(unit === 'F') {
        return ((degrees - 32) * 5 / 9) + 'C';
    }else {
        console.log('Please enter a valid unit like C(Celsius) or F(Fahrenheit)');
        return undefined;
    }
}

console.log(convertTemperature(25,'C'));
console.log(convertTemperature(86,'F'));