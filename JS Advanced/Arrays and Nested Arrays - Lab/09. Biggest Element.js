function solve(arr) {
    let arrNew = []
    for (const input of arr) {
        for (const num of input) {

            arrNew.push(num)
        }

    }
    let sorted = arrNew.sort((a, b) => b - a).shift()
    return sorted


}
solve([[20, 50, 10],
[8, 33, 145]])
console.log("------")
solve([[3, 5, 7, 12],
[-1, 4, 33, 2],
[8, 3, 0, 4]])