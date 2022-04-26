function solve(input){
    let book = {}
for (let command of input) {
    let comm = command.split(" ")
    let name = comm[0]
    let phone = comm[1]
    book[name] = phone
}
for (const key in book) {
    console.log(`${key} -> ${book[key]}`)
    
}


}
solve(['Tim 0834212554',
'Peter 0877547887',
'Bill 0896543112',
'Tim 0876566344'])
// solve()