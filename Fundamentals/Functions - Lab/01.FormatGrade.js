/*< 3.00 - "Fail"
>= 3.00 and < 3.50 - "Poor"
>= 3.50 and < 4.50 - "Good"
>= 4.50 and < 5.50 - "Very good"
>= 5.50 - "Excellent"*/
function solve(grade){
    if (grade < 3){
        grade = 2
    }else{
        grade = grade.toFixed(2)
    }
    let result = ''
if(grade < 3){
    result = "Fail"
}else if(grade < 3.50){
    result = "Poor"
}else if(grade < 4.50){
    result = "Good"
}else if(grade < 5.50){
    result = "Very good"
}else{
    result = "Excellent"
}


console.log(`${result} (${grade})`)

}
solve(2.90)
solve(4.50)