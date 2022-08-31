function solve(word){
    let text = ""
for (let i = 0; i < word.length; i++) {
    let currChar = word.charAt(i)
    let char = word.charAt(i+1)
    if(currChar != char){
        text+=currChar
    }
}

console.log(text)



}
solve('aaaaabbbbbcdddeeeedssaa')
solve('qqqwerqwecccwd')