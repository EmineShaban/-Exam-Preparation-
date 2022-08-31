function solve(arr, bomb) {
    let bomba = bomb[0]
    let bombaDva = bomb[1]
    let sum = 0
    let indexOfBomb = arr.indexOf(bomba)
    let indexDva = indexOfBomb - bombaDva
    for (let i = 0; i < arr.length - 1; i++) {
        let num = arr[i]
        if (num === bomba) {
             // arr.splice(indexOfBomb, bombaDva * 2 + 1)
             //arr.splice(indexOfBomb, bombaDva) // (индекс ., скок елементов, )
             // arr.splice(indexOfBomb, 1)
            arr.splice(indexOfBomb , bombaDva + 1) // (индекс ., скок елементов, )
            arr.splice(indexDva, bombaDva)
            indexOfBomb = arr.indexOf(bomba) 

        }
    }
    for (let num of arr) {
        sum += num
    }
    console.log(sum)
}
solve([1, 2, 2, 4, 2, 2, 2, 9],
    [4, 2])
    //12
solve([1, 4, 4, 2, 8, 9, 1],
    [9, 3])
    //5
solve([1, 7, 7, 1, 2, 3],
   [7, 1])
   //6
solve([1, 1, 2, 1, 1, 1, 2, 1, 1, 1],
    [2, 1])
    //4