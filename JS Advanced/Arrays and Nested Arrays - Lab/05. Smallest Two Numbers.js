function solve(arr){

let result = arr.sort((a, b) => a-b)
let first = result.shift()
let second = result.shift()
console.log(first, second)
}
solve([30, 15, 50, 5])
console.log("------")
solve([3, 0, 10, 4, 7, 3])