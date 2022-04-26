function solve(arr, nums){
let first = nums[0]
let second = nums[1]
let third = nums[2]

let firstOna = arr.splice(first)
let secondOne = arr.splice(0,second)
let isInclude = arr.includes(third)
let count = 0
for (let num of arr) {
    if(num  === third){
        count++
    }
    
}
console.log(`Number ${third} occurs ${count} times.`)
}
solve([5, 2, 3, 3, 4, 1, 6],
    [5, 2, 3])
//solve([7, 1, 5, 8, 2, 7],
 //   [3, 1, 5])