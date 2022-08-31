function solve(arr){
let result = []

for (let i = 0; i < arr.length; i++) {
    let num = arr[i]
    if(num<0 ){
        result.unshift(num)
    }else{
        result.push(num)
    }
}
console.log(result.join(" "))

}
solve([7, -2, 8, 9])
console.log("------")
solve([3, -2, 0, -1])