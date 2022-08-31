function solve(arr){

let first = arr.shift()
let last = arr.pop()
let sum = Number(first) + Number(last)
return sum
}
console.log(solve(['20', '30', '40']))
console.log("------")
solve(['5', '10'])