function solve(arr){
let newArr = []
for (const num of arr) {
    let numNum = Number(num)
    if(numNum >= 0 ){
        newArr.push(numNum)
    }else{
        newArr.unshift(numNum)
    }
}
for (const num of newArr) {
    console.log(num)

}
}
solve([3,
    -2,
    0,
    -1])
//solve(['3', '-2', '0', '-1'])