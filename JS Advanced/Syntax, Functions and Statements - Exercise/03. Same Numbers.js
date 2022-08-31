function solve(num) {
    let arr = num.toString()
    let firstnum = Number(arr[0])
    let isTrue = true
    let sum = 0
    for (let i = 1; i < arr.length; i++) {
        let second = Number(arr[i])
        sum += second
        if (firstnum === second) {
            isTrue = true
        } else {
            isTrue = false
        }
    }
    console.log(isTrue)
    console.log(sum + firstnum)
}
solve(2222222)
console.log("------")
solve(1234)