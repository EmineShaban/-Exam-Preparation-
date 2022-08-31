function solve(arr){
let result = []
for (let i = 0; i < arr.length; i++) {
    let num = arr[i]
if(i % 2 !== 0){
    num *= 2
    result.push(num)
}    
}
return result.reverse()
}
// solve([10, 15, 20, 25])
// console.log("------")
solve([3, 0, 10, 4, 7, 3])