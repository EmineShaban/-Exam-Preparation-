function solve(num){
let sum = 0 
let numStr = num.toString()
for(let char of numStr){
    sum += Number(char)
}
console.log(sum)
}
solve(245678)
solve(97561)