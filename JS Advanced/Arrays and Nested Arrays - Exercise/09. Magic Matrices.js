function solve(arr) {
    let rowSum = []
    let sum = arr[0].reduce((a, b) => a + b)
    arr.forEach(el => {
        rowSum.push(el.reduce((a, b) => a + b))
    });
    for (let i = 0; i < arr[0].length; i++) {
        let sumRow = arr[i].reduce((a, b) => a + b)
        let currentCol = 0
        for (let j = 0; j < arr.length; j++) {
            currentCol += arr[i][j]

        }
        if (currentCol !== sum) {
            return false
        }
    }
    return true

}
console.log(solve([[4, 5, 6],
[6, 5, 4],
[5, 5, 5]]))
console.log("------")
console.log(solve([[11, 32, 45],
[21, 0, 1],
[21, 1, 1]]))