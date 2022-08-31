function solve(x1,y1, x2,y2){
    let result1 = Math.sqrt((Math.pow(x1 - y1), 2) + (Math.pow(0 - 0), 2))
    let result2 = Math.sqrt((Math.pow(x2 - y2), 2) + (Math.pow(0 - 0), 2))
    let result = Math.sqrt((Math.pow(x1 - y1), 2) + (Math.pow(x2-y2), 2))
console.log(Number.isInteger(result))
console.log(Number.isInteger(result1))
console.log(Number.isInteger(result2))
if(Number.isInteger(result1) === true){
    console.log(`{${x1}, ${y1}} to {0, 0} is valid`)
}else{
    console.log(`{${x1}, ${y1}} to {0, 0} is invalid`)
}
if(Number.isInteger(result2) === true){
    console.log(`{${x2}, ${y2}} to {0, 0} is valid`)
}else{
    console.log(`{${x2}, ${y2}} to {0, 0} is invalid`)
}
if(Number.isInteger(result) === true){
    console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is valid`)
}else{
    console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is invalid`)
}
}
solve(3, 0, 0, 4)
console.log("------")
solve(2, 1, 1, 1)