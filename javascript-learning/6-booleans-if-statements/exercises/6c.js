const hour = 3;
const name = 'C_11nJxx'
if (hour >= 6 && hour <= 12) {
    console.log(`Good morning ${name}!`);
} else if (hour >= 13 && hour <= 17) {
    console.log(`Good afternoon ${name}!`);
} else {
    console.log(`Good night ${name}!`);
}