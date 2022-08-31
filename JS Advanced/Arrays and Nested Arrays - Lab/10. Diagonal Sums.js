function solve(arr) {
    let first = 0
    let second = 0
    for (let i = 0; i < arr.length; i++) {
        first += arr[i][i]
        second += arr[i][arr.length - 1 - i]
        
    }
    
    console.log(first, second)

}
solve([[20, 40],
[10, 60]])
console.log("------")
solve([[3, 5, 17],
[-1, 7, 14],
[1, -8, 89]])