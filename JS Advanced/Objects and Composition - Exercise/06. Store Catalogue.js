function solve(arr){
    let result = arr.sort((a, b) => a.localeCompare(b))
        let current = []
        let currChar = ''
        for (let i = 0; i < result.length; i++) {
            current = result[i].split(' : ')
            if(result[i][0] != currChar){
                console.log(result[i][0])
            }
            console.log(`${current[0]}: ${current[1]}`)
            currChar = result[i][0]
        }
}
solve(['Appricot : 20.4',
'Fridge : 1500',
'TV : 1499',
'Deodorant : 10',
'Boiler : 300',
'Apple : 1.25',
'Anti-Bug Spray : 15',
'T-Shirt : 10'])
console.log("------")
solve(['Banana : 2',
"Rubic's Cube : 5",
'Raspberry P : 4999',
'Rolex : 100000',
'Rollon : 10',
'Rali Car : 2000000',
'Pesho : 0.000001',
'Barrel : 10'])

// A
//   Anti-Bug Spray: 15
//   Apple: 1.25
//   Appricot: 20.4
// B
//   Boiler: 300
// D
//   Deodorant: 10
// F
//   Fridge: 1500
// T
//   T-Shirt: 10
//   TV: 1499