function solve(arr){
let result = new Map()
for (let comm of arr) {
    let name = comm
    if(result.has(name)){
        let sum = result.get(name) + 1
        result.set(name, sum)
    }else{
        result.set(name, 1)
    }
}

let sorted = Array.from(result.entries()).sort((a,b) => b[1] - a[1])
for (let iterator of sorted) {
    
    console.log(`${iterator[0]} -> ${iterator[1]} times`)
}
 
}
solve(["Here", "is", "the", "first", "sentence", "Here", "is", "another", "sentence", 
"And", "finally", "the", "third", "sentence"])
solve()
