function solve(arr){
let result = {}
for (let comm of arr) {
    let [name, adress] = comm.split(":")
    result[name] = adress
}
let sorted = Object.entries(result)
sorted.sort((a,b) => {
    let nameA = a[0];
    let nameB = b[0];
    return nameA.localeCompare(nameB)
})
for (let [name,adress] of sorted) {
    
    console.log(`${name} -> ${adress}`)
}



}
solve(['Tim:Doe Crossing',
'Bill:Nelson Place',
'Peter:Carlyle Ave',
'Bill:Ornery Rd'])
// solve()
