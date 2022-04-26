function solve(catAsString){
class Cat {
    constructor(name, age){
    this.name = name
    this.age = age
}
meow() {
    console.log(`${this.name}, age ${this.age} says Meow`)
}
}
let c = []
for (let cats of catAsString) {
    let tokens = cats.split(' ')
    let cat = new Cat(tokens[0], Number(tokens[1]) )
    c.push(cat)
}
for (let cat of c) {
    cat.meow()
}
}
solve(['Mellow 2', 'Tom 5'])
solve(['Candy 1', 'Poppy 3', 'Nyx 2'])