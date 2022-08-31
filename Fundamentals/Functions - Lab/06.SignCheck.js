function solve(num1, num2, num3) {
    // if (num1 < 0 && num2 < 0 && num3 < 0) {
    //     console.log("Negative")
    //     //- - - 
    // } else if (num1 < 0 && num2 < 0 && num3 > 0) {
    //     console.log("Positive")
    //     // - - +
    // } else if (num1 < 0 && num2 > 0 && num3 < 0) {
    //     console.log("Positive")
    //     // - + -
    // } else if (num1 > 0 && num2 < 0 && num3 < 0) {
    //     console.log("Positive")
    //     // + - -
    // } else if (num1 < 0 && num2 > 0 && num3 > 0) {
    //     console.log("Negative")
    //     // - + +
    // } else if (num1 > 0 && num2 > 0 && num3 < 0) {
    //     console.log("Negative")
    //     // + + -
    // } else {
    //     console.log('Positive')
    // }
let arr = [num1, num2, num3]
let counter = 0
for (const i of arr) {
    if(i<0){
        counter++
    }    
}

if(counter % 2 === 0){
    console.log('Positive')
}else{
    console.log('Negative')
}



}

solve(5,
    12,
    -15)
solve(-6,
    -12,
    14)
solve(-1,
    -2,
    -3)
solve(-5,
    1,
    1)