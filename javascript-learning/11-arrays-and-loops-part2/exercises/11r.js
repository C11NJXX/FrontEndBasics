function removeFood(food, foods) {
    for (let i = 0; i < foods.length; i++) {
        if (foods[i] === food) {
            foods.splice(i, 1);
            //FIXME:当元素删除后，注意下标变化！
            i--; // 删除元素后将索引减1
        }
    }
}
const foods = ['egg', 'apple', 'egg', 'egg', 'ham'];
console.log(foods);
removeFood('egg', foods);
console.log(foods);