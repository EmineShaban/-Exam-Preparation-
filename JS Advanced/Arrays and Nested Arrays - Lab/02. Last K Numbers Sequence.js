function solve(num1, num2) {
    let result = [1]

    while (result.length < num1) {
        let num = result.slice(-num2)
        let sum = 0
        for (const n of num) {
            let nn = Number(n)
            sum += nn
        }
        result.push(sum)
    }
    // console.log(`[${result.join(' ')}]`)
    return result
}
console.log(solve(8, 2))
console.log("------")
solve(6, 3)