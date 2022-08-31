function solve(num){
    let numStr = num.toString()
let odd = 0 
let even = 0
    for (let index = 0; index < numStr.length; index++) {
        let curNum = Number(numStr[index])
        if(curNum % 2 == 0){
            even+=curNum
        }
        if(curNum % 2 == 1){
            odd+=curNum
        }
        
    }
    console.log(`Odd sum = ${odd}, Even sum = ${even}`)
}
solve(1000435)
solve(3495892137259234)
// Odd sum = 9, Even sum = 4