const runTwice = function(param) {
    param();
    param();
}

const add = function() {
    console.log(2 + 3);
}

runTwice(add);
runTwice(function() {
    console.log('12b');
})