function solve(worddd, arr){
let text = arr.split(" ")
for (let word of text) {
    if(worddd.toLowerCase() === word.toLowerCase()){
        console.log(worddd)
        return
    }

}
console.log(`${worddd} not found!`)

}
solve('javascript','JavaScript is the best programming language')
solve('python',
'JavaScript is the best programming language')