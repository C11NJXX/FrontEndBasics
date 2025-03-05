import convertMoney from "../money.js";

console.log('Test suite: convertMoney');

console.log('Basic test');
if(convertMoney(4096) === 40.96) {
    console.log("passed")
}else {
    console.log('failed');
};

console.log('0 test');
if(convertMoney(0) === 0.00) {
    console.log("passed")
}else {
    console.log('failed');
};

console.log('float and round test');
if(convertMoney(409.6) === 4.10) {
    console.log("passed")
}else {
    console.log('failed');
};