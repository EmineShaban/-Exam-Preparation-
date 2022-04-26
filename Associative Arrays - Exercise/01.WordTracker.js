function solve(arr){
let words = arr.shift().split(" ")
let result = {}
for (let word of words) {
    result[word] = 0
}
for (let comm of arr) {
    // let info = comm.split(" ")
    if(result.hasOwnProperty(comm)){
        result[comm]++
    }
}
let sorted = Object.entries(result).sort((a, b) => b[1] - a[1])
for (let iterator of sorted) {
    console.log(`${iterator[0]} - ${iterator[1]}`)
}

}
solve([
    'this sentence', 
    'In', 'this', 'sentence', 'you', 'have', 'to', 'count', 'the', 'occurances', 'of', 'the', 
    'words', 'this', 'and', 'sentence', 'because', 'this', 'is', 'your', 'task'
    ])
    console.log("-----------------")
solve([
    'is the', 
    'first', 'sentence', 'Here', 'is', 'another', 'the', 'And', 'finally', 'the', 'the', 'sentence'])