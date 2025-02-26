function removeFood(food, foods) {
    //reverse foodsCopy
    const foodsCopy = foods.slice();
    foodsCopy.reverse();
    let count = 0;
    for (let i = 0; i < foodsCopy.length; i++) {
        if (foodsCopy[i] === food) {
            foodsCopy.splice(i, 1);
            i--; // 删除元素后将索引减1
            count++
        }
        if (count === 2) {
            foodsCopy.reverse();
            return foodsCopy;
        }
    }
}
const foods = ['egg', 'apple', 'egg', 'egg', 'ham'];
console.log(foods);
const foodsAfterDeal = removeFood('egg', foods);
console.log(foods);
console.log(foodsAfterDeal);