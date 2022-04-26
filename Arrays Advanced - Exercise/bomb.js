function solve(array, bomb) {
    let bombNumber = bomb[0]
    let bombRadius = bomb[1]
    let sum = 0
    let indexOfBomb = array.indexOf(bombNumber)
    while (indexOfBomb !== -1) {
        let startexplosionIndex = Math.max(0, indexOfBomb - bombRadius)
        let explosionLength = bombRadius * 2 + 1
        array.splice(startexplosionIndex, explosionLength)
        indexOfBomb = array.indexOf(bombNumber)
    }
    for (let num of array) {
        sum += num
    }
    console.log(sum)
}
solve([1, 4, 4, 2, 8, 9, 1], [9, 3])
