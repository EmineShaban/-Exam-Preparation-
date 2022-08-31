function solve(arr){
    let sum = 0 
    let firstSum =0
    let result = []
    for (let num of arr) {
        let number = Number(num)
        sum += number
        let num1 = 0
        num1 = 1/num
        firstSum += num1
        result.push(num)
    }
    console.log(sum)
    console.log(firstSum)
    console.log(result.join(""))
    
    
    }