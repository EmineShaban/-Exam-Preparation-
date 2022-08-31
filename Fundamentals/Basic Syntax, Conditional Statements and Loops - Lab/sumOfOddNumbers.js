function solve(num){
    let counter = 0 
    let sum = 0
for(let i = 1; i <=100; i+=2){
    if (counter < num){
        console.log(i)
        sum += i
        counter ++
    }
}
console.log(`Sum: ${sum}`)
}
solve(5)