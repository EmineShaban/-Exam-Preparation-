function solve(arr){


    let filtered = arr.filter((x, i) => i%2 == 1)
let doubled = filtered.map(x => x*2)
let result = doubled.reverse()
console.log(result.join(' '))


}
solve([10, 15, 20, 25])
//solve([3, 0, 10, 4, 7, 3])