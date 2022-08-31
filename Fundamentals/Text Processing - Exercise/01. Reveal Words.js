function solve(word, arr){
let words = word.split(", ")
for (let word of words) {
        arr = arr.replace("*".repeat(word.length), word)
    }
    console.log(arr)

}
solve('great',
'softuni is ***** place for learning new programming languages')
solve('great, learning',
'softuni is ***** place for ******** new programming languages')