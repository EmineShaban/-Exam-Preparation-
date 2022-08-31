function solve(arr) {

    let sorted = arr.sort((a, b) => a - b)
    // console.log(sorted);
    let newArr = []
    while (sorted.length !== 0) {
        let first = sorted.shift()
        newArr.push(first)
        let last = sorted.pop()
        newArr.push(last)
    }
return newArr
}
solve([1, 65, 3, 52, 48, 63, 31, -3, 18, 56])