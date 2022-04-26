function solve(person){
let per = JSON.parse(person)
console.log(per)
for (let keys of Object.keys(per) ) {
    console.log(`${keys}: ${per[keys]}`)
}
}
solve('{"name": "George", "age": 40, "town": "Sofia"}')
solve('{"name": "Peter", "age": 35, "town": "Plovdiv"}')