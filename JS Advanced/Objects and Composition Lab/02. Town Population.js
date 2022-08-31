function solve(arr){
let result = []
for (const com of arr) {
    let command = com.split(' <-> ')
    let city = command[0]
    let population = Number(command[1])
    // console.log(city, population)
    if(!result[city]){
        result[city] = 0

    }
    result[city] += population
}
for (const key in result) {
   
    
    console.log(`${key} : ${result[key]}`)
}

}
solve(['Sofia <-> 1200000',
'Montana <-> 20000',
'New York <-> 10000000',
'Washington <-> 2345000',
'Las Vegas <-> 1000000'])
console.log("------")
solve(['Istanbul <-> 100000',
'Honk Kong <-> 2100004',
'Jerusalem <-> 2352344',
'Mexico City <-> 23401925',
'Istanbul <-> 1000'])