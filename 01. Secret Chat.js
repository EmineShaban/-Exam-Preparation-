function solve(input) {
    let text = input.shift()
    for (let line of input) {
        line = line.split(":|:")
        let command = line[0]
        let p1 = line[1]
        let p2 = line[2]
        if (command === 'ChangeAll') {
            text = text.split(p1).join(p2)
            
            console.log(text)
        } else if (command === 'Reverse') {
            let indexOfP1 = text.indexOf(p1)
            if (indexOfP1 === -1) {
                console.log('error');
            } else {
                let right = text.slice(indexOfP1 + p1.length)
                let left = text.slice(0, indexOfP1)
                text = left + right + p1.split("").reverse().join("")
                console.log(text)
            }
        } else if (command === 'InsertSpace') {
            p1 = Number(p1)
            let right = text.slice(0,p1)
            let left = text.slice(p1)
            text = right+' '+left
            console.log(text)

        } else if (command === 'Reveal') {
            console.log(`You have a new text message: ${text}`)
            break;
        }
    }
}
solve([
    'heVVodar!gniV',
    'ChangeAll:|:V:|:l',
    'Reverse:|:!gnil',
    'InsertSpace:|:5',
    'Reveal'
])
console.log("------------------")
solve([
    'Hiware?uiy',
    'ChangeAll:|:i:|:o',
    'Reverse:|:?uoy',
    'Reverse:|:jd',
    'InsertSpace:|:3',
    'InsertSpace:|:7',
    'Reveal'
])

