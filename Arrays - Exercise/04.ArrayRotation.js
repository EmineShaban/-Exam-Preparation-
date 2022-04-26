function solve(arr, num){
for (let index = 0; index < num; index++) {
    let currNum = arr.shift()
    arr.push(currNum)    
}

console.log(arr.join(" "))

}
solve([51, 47, 32, 61, 21], 2)
solve([32, 21, 61, 1], 4)