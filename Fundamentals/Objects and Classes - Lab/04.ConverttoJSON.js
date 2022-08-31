function solve(name, lastName, hairColor){

let person = {
    name,
    lastName, 
    hairColor
}
let obj = JSON.stringify(person)
console.log(obj)
}
console.log(solve('George', 'Jones', 'Brown'))
console.log(solve('Peter', 'Smith', 'Blond'))