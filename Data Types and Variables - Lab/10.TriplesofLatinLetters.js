function solve(num) {
    let n = Number(num)
    for (let i = 0; i < n; i++) {
        let letterA = String.fromCharCode(97 + i)
        for (let k = 0; k < n; k++) {
            let letterB = String.fromCharCode(97 + k)
            for (let r = 0; r < n; r++) {
                let letterC = String.fromCharCode(97 + r)
                console.log(`${letterA}${letterB}${letterC}`)
            }
        }
    }
}
solve(2)
