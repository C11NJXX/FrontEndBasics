// function greet(name) {
//     if (!name) {
//         console.log('Hello there!')
//     } else {
//         console.log(`Hello ${name}!`);
//     }
// }

function greet(name = 'there') {
    console.log(`Hello ${name}!`);
}

greet('C_11nJxx');
greet('Rudy James');
greet();