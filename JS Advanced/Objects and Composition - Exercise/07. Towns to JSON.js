function solve(arr){
    let current = arr.shift().split("|")
    let Town = current[1].trim()
    let latitude = current[2].trim()
    let Longitude = current[3].trim()

    // console.log(arr[0].slice(2).split(' | ').shift())
    
    let sum = []
    for (const comm of arr) {
        let result ={}
        let name = comm.split('|')
        let num = Number(name[2]).toFixed(2)
        let num1 = Number(name[3]).toFixed(2)

        // console.log(result)
        result.Town = name[1].trim()
        result.Latitude = Number(num)
        result.Longitude = Number(num1)
        
        sum.push(result)
    }
    // console.log(sum)
    let res = JSON.stringify(sum)
    console.log(res)
    

}
solve(['| Town | Latitude | Longitude |',
'| Sofia | 42.696552 | 23.32601 |',
'| Beijing | 39.913818 | 116.363625 |'])
// console.log("------")
// solve()
// [{"Town":"Sofia",
//   "Latitude":42.7,
//   "Longitude":23.32
// },{"Town":"Beijing", 
//  "Latitude":39.91, 
//  "Longitude":116.36
// }]