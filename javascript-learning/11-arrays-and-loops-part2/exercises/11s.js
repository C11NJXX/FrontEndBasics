function removeFood(food, foods) {
    for (let i = 0; i < foods.length; i++) {
        if (foods[i] === food) {
            foods.splice(i, 1);
            break;
        }
    }
}
const foods = ['egg', 'apple', 'egg', 'egg', 'ham'];
console.log(foods);
removeFood('egg', foods);
console.log(foods);