function removeEggs(foods) {
    let count = 0;
    return foods.filter(value => {
        if (value === 'egg' && count < 2) {
            count++;
            return false;
        }else {
            return true;
        }
    });
}
const foods = ['egg', 'apple', 'egg', 'egg', 'ham'];
const foodsWithoutEgg = removeEggs(foods);
console.log(foodsWithoutEgg);