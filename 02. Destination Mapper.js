function solve(input){
let pattern = /([=\/])(?<name>[A-Z][A-z]{2,})\1/gm
let nameLength = 0
let output = []
let result = pattern.exec(input)
while(null != result){
    let name = result.groups.name
    nameLength += name.length
    output.push(name)
    result = pattern.exec(input)
}
console.log(`Destinations: ${output.join(", ")}`)
console.log(`Travel Points: ${nameLength}`)
}
solve(["=Hawai=/Cyprus/=Invalid/invalid==i5valid=/I5valid/=i="])
console.log("------------------")
solve(["ThisIs some InvalidInput"])