function solve(name){

let regexp = /\b[A-Z][a-z]+\b \b[A-Z][a-z]+\b/g
let result = name.match(regexp)
console.log(result.join(" "))
}
solve("Ivan Ivanov, Ivan ivanov, ivan Ivanov, IVan Ivanov, Test Testov, Ivan	Ivanov")
