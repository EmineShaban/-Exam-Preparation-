function solve() {
    let result = {}
    let input = Array.from(arguments).forEach((line) => {
        let type = typeof line
        console.log(`${type}: ${line}`)
        if (!result[type]) {
            result[type] = 0
        }
        result[type]++
    })
    Object.keys(result)
    .sort((a,b) => result[b] - result[a])
    .forEach((key) => console.log(`${key} = ${result[key]}`))
}
solve('cat', 42, function () { console.log('Hello world!'); })
