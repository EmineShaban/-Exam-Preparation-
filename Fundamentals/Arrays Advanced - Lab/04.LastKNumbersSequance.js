function solve(n, k){

let arr = [1]
for (let i = 0; i < n - 1; i++){
let lastK = arr.slice(-k)
let sum = 0
for (const num of lastK) {
    sum +=num
}
arr.push(sum)
}

console.log(arr.join(' '))

}
solve(6, 3)
//solve(8, 2)