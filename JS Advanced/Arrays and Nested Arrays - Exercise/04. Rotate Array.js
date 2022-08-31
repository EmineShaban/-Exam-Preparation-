function solve(arr, n){
let arrNew = []
for (let i = 0; i < n; i++) {
    let num = arr[i]
let last = arr.pop(num)
arr.unshift(last)
}
console.log(arr.join(' '))

}
solve(['1', 
'2', 
'3', 
'4'], 
2)
console.log("------")
solve(['Banana', 
'Orange', 
'Coconut', 
'Apple'], 
15)