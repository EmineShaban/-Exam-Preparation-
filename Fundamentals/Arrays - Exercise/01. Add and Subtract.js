function solve(arr){
let newarr = arr
let sumOfarr = 0
let newSum = 0 
for (let i = 0; i < newarr.length; i++){
//    arr[i] = Number(arr[i])
    sumOfarr += newarr[i]
    if (newarr[i] % 2 === 0){
        newarr[i] += i
    }else{
        newarr[i] -= i
    }
    newSum +=newarr[i]
}
console.log(newarr)
console.log(sumOfarr)
console.log(newSum)
}