const nums = [1, 2, 3, 4, 5];

const sum = nums.reduce((accumulator, curr) => {
    return accumulator + curr;
}, 0);

console.log(nums);
console.log("Sum: ", sum);
console.log("Avg: ", sum/nums.length);
