function solve(arr) {
    let newArr = []
    let initialValue 
    let sumWithInitial = arr.reduce(
        (previousValue, currentValue) => previousValue > currentValue,
        initialValue
    )
    
    console.log(sumWithInitial)
    //     for (let i = 0; i < arr.length; i++) {
    //         let num = arr[i]
    //         for (let j = 1; j < arr.length; j++) {
    //             let n = arr[j]
    //             if (num > n) {
    //             } else {  
    //                 newArr.push(num)
    //                 break
    //             }
    //         }
    //     }
    //     return newArr
}
solve([1,
    3,
    8,
    4,
    10,
    12,
    3,
    2,
    24])
console.log("------")
solve([1,
    2,
    3,
    4])
    //[1, 3, 8, 10, 12, 24]