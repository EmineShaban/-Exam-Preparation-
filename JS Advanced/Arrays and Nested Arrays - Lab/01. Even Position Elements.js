function solve(arr){
let neww = []
for (let i = 0; i < arr.length; i++) {
if(i%2 == 0){
    neww.push(arr[i])
}
}
console.log(neww.join(" "))

}
solve(['20', '30', '40', '50', '60'])
console.log("------")
solve(['5', '10'])