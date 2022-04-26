function solve(arr) {
    let result = new Map()
    for (let line of arr) {
        let info = line.split(" ")
        let name = info.shift()
        let grades = info.map(Number)

    if(result.has(name) == false){
        result.set(name, [])
    }


let existing = result.get(name)
    for (let grade of grades) {
        existing.push(grade)
}
    }
let sorted = Array.from(result)
sorted.sort((a, b) => a[0].localeCompare(b[0]))

for (let [name, num] of sorted) {
    let average = 0 
    for (const nums of num) {
        average+=nums
    }
    average /= num.length
    console.log(`${name}: ${average.toFixed(2)}`)
}


}
solve(['Lilly 4 6 6 5',
    'Tim 5 6',
    'Tammy 2 4 3',
    'Tim 6 6'])
// solve(['Steven 3 5 6 4',
// 'George 4 6',
// 'Tammy 2 5 3',
// 'Steven 6 3'])