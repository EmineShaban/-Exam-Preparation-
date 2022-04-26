function solve(arr){
let array = arr.sort((a,b) => b-a)
let newArr = []
while(array.length > 0){
    let biggerNum = array.shift()
    newArr.push(biggerNum)
    let smallerNum = array.pop()
    newArr.push(smallerNum)
}

console.log(newArr.join(" "))

}
solve([1, 21, 3, 52, 69, 63, 31, 2, 18, 94])
solve([34, 2, 32, 45, 690, 6, 32, 7, 19, 47])