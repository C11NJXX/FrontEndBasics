function removeFood(food, foods) {
    //reverse foods
    foods.reverse();
    let count = 0;
    for (let i = 0; i < foods.length; i++) {
        if (foods[i] === food) {
            foods.splice(i, 1);
            i--; // 删除元素后将索引减1
            count++
        }
        if(count === 2) {
            foods.reverse();
            break;
        }
    }
}
const foods = ['egg', 'apple', 'egg', 'egg', 'ham'];
console.log(foods);
removeFood('egg', foods);
console.log(foods);