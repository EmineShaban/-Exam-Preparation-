function solve(arr){
    
let array = arr
for (let index = 0; index < array.length; index++) {
    let nums = array[index];
    let reverse = Number(nums.toString().split('').reverse().join(""))
    if(nums === reverse){
        console.log("true")
    }else{
        console.log("false")
    }    
}
}
solve([123,323,421,121])
//solve([32,2,232,1010])


// for(let num of arr){
//     let numcur = Number(num)
//     let reversed = Number(num.toString().split('').reversed().join(" "))
//     if(numcur === reversed){
//         console.log("true")

//     }else {
//         console.log("false")
//     }
// }