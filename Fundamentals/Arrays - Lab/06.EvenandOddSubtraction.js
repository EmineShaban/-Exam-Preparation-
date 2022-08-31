function solve(arr) {
    let num = 0
    let oddSum = 0
    let even = 0
    for (let i = 0; i < arr.length; i++) {
        num = Number(arr[i])



        if (num % 2 == 0){
            even += num
        }else{
            oddSum+= num
        }

}
let result = even - oddSum
console.log(result)

}
solve([1, 2, 3, 4, 5, 6])
solve([3,5,7,9])
solve([2,4,6,8,10])