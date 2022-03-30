function solve(input) {
    let password = input.shift()
    let pass = ''
    while (input[0] != 'Done') {
        let tokens = input.shift().split([' '])
        let command = tokens[0]
        let p1 = tokens[1]
        let p2 = tokens[2]
        if (command === 'TakeOdd') {
            for (let i = 0; i < password.length; i++) {
                if (i % 2 != 0) {
                    pass += password[i]
                }
            }
            password = pass
            console.log(password)
        } else if (command === 'Cut') {
            p1 = Number(p1)
            p2 = Number(p2)
            let n = p1+p2
            let right = password.slice(0, p1)
            let left = password.slice(n)
            password = right + left
            console.log(password)
        } else if (command === 'Substitute') {
            if (password.includes(p1)) {
                password = password.split(p1).join(p2)
                console.log(password)
            } else {
                console.log('Nothing to replace!')
            }
        }
    }
    console.log(`Your password is: ${password}`)
}
solve(["Siiceercaroetavm!:?:ahsott.:i:nstupmomceqr",
    "TakeOdd",
    "Cut 15 3",
    "Substitute :: -",
    "Substitute | ^",
    "Done"])
console.log("------------------")
solve(["up8rgoyg3r1atmlmpiunagt!-irs7!1fgulnnnqy",
    "TakeOdd",
    "Cut 18 2",
    "Substitute ! ***",
    "Substitute ? .!.",
    "Done"])