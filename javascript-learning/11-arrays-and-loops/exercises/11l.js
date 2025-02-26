function minMax(nums) {
    let result = { min: Infinity, max: 0 };
    if (nums.length === 0) {
        return { min: null, max: null };
    }
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] < result.min) {
            result.min = nums[i];
        }
        if (nums[i] > result.max) {
            result.max = nums[i];
        }
    }
    return result;
}

console.log(minMax([1,-3,5]));
console.log(minMax([-2,3,-5,7,10]));