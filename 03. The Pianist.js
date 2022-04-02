function solve(input) {
    let nums = input.shift()
    let result = {}
    for (let i = 0; i < nums; i++) {
        let [piece, composer, key] = input.shift().split("|")
        result[piece] = [composer, key]
    }
    while (input[0] !== 'Stop') {
        let [command, piece, p1, p2] = input.shift().split("|")
        if (command === 'Add') {
            if (!result.hasOwnProperty(piece)) {
                result[piece] = [p1, p2]
                console.log(`${piece} by ${p1} in ${p2} added to the collection!`)
            } else {
                console.log(`${piece} is already in the collection!`)
            }
        } else if (command === 'Remove') {
            if (result.hasOwnProperty(piece)) {
                delete result[piece]
                console.log(`Successfully removed ${piece}!`)
            } else {
                console.log(`Invalid operation! ${piece} does not exist in the collection.`)
            }
        } else if (command === 'ChangeKey') {
            if (result.hasOwnProperty(piece)) {
                result[piece][1] = [p1]
                console.log(`Changed the key of ${piece} to ${p1}!`)
            } else {
                console.log(`Invalid operation! ${piece} does not exist in the collection.`)
            }
        }

    }
    for (const parametr in result) {
        console.log(`${parametr} -> Composer: ${result[parametr][0]}, Key: ${result[parametr][1]}`)
    }
}
solve([
    '3',
    'Fur Elise|Beethoven|A Minor',
    'Moonlight Sonata|Beethoven|C# Minor',
    'Clair de Lune|Debussy|C# Minor',
    'Add|Sonata No.2|Chopin|B Minor',
    'Add|Hungarian Rhapsody No.2|Liszt|C# Minor',
    'Add|Fur Elise|Beethoven|C# Minor',
    'Remove|Clair de Lune',
    'ChangeKey|Moonlight Sonata|C# Major',
    'Stop'
])
console.log("------------------")
solve([
    '4',
    'Eine kleine Nachtmusik|Mozart|G Major',
    'La Campanella|Liszt|G# Minor',
    'The Marriage of Figaro|Mozart|G Major',
    'Hungarian Dance No.5|Brahms|G Minor',
    'Add|Spring|Vivaldi|E Major',
    'Remove|The Marriage of Figaro',
    'Remove|Turkish March',
    'ChangeKey|Spring|C Major',
    'Add|Nocturne|Chopin|C# Minor',
    'Stop'
])