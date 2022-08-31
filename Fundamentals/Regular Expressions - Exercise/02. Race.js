function solve(arr) {
    let name = arr.shift().split(", ")
    let resers = {}
    for (let line of arr) {
        if (line !== "end of race") {
            let regex = /[A-Z]+/gi
            let regex2 = /\d/gi
            let name1 = line.match(regex).join("")
            let meters = line.match(regex2)
            let distance = 0;
            for (let metr of meters) {
                distance += +metr
            }
            if (name.includes(name1)) {
                if (resers.hasOwnProperty(name1)) {
                    resers[name1] += distance
                } else {
                    resers[name1] = distance
                }
            }
        }
    }
    let sorted = Object.keys(resers).sort((a, b) => resers[b] - resers[a])
    console.log(`1st place: ${sorted[0]}\n2nd place: ${sorted[1]}\n3rd place: ${sorted[2]}`)


}
solve(['George, Peter, Bill, Tom',
    'G4e@55or%6g6!68e!!@ ',
    'R1@!3a$y4456@',
    'B5@i@#123ll',
    'G@e54o$r6ge#',
    '7P%et^#e5346r',
    'T$o553m&6',
    'end of race'])
console.log("----------------------------")
solve(['Ronald, Bill, Tom, Timmy, Maggie, Michonne',
    'Mi*&^%$ch123o!#$%#nne787) ',
    '%$$B(*&&)i89ll)*&) ',
    'R**(on%^&ald992) ',
    'T(*^^%immy77) ',
    'Ma10**$#g0g0g0i0e',
    'end of race'])