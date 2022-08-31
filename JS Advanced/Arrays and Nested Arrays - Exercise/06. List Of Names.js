function solve(arr) {
    let sorted = arr.sort((a, b) => a.localeCompare(b))

    let n = 1
    let result = sorted.forEach((name) => {
        console.log(`${n}.${name}`)
        n++
    })

    
}
solve(["John", "Bob", "Christina", "Ema"])
