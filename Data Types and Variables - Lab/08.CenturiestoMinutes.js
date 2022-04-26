function solve(centuries){

let years = 100 * centuries 
let days = Math.floor(years * 365.2422)
let hours = days * 24
let min = hours * 60
console.log(`${centuries} centuries = ${years} years = ${days} days = ${hours} hours = ${min} minutes`)

}
solve(1)
solve(5)