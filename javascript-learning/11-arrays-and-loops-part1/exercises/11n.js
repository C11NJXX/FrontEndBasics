function countWords(words) {
    let result = {};
    for (let i = 0; i < words.length; i++) {
        const word = words[i];
        if (!result[word]) {
            result[word] = 1;
        } else {
            result[word]++;
        }
    }
    return result;
}

console.log(countWords(['apple', 'apple', 'apple', 'apple', 'banana', 'grape', 'grape']));