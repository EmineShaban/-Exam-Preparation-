function solve(arr, word){
let text = arr.split(" ")
let count = 0
for (let char of text) {
    if(char === word){
        count++
    }
}
console.log(count)
}
solve('This is a word and it also is a sentence',
'is')
solve('softuni is great place for learning new programming languages',
'softuni')