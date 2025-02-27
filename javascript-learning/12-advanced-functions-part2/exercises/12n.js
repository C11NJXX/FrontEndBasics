function removeEggs(foods) {
    return foods.filter(value => value!=='egg');
}
const foods = ['egg','apple','egg','egg','ham'];
const foodsWithoutEgg = removeEggs(foods);
console.log(foodsWithoutEgg);