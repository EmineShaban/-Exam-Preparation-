function solve(num1, num2){
    let result = 1
    let sum = 1
for (let index = 1; index <= num1; index++) {
    result = result * index
}
for (let index = 1; index <= num2; index++) {
    sum = sum * index
}
console.log((result/sum).toFixed(2))


}
solve(5, 2)
solve(6, 2)