function solve(num){
    let result = 0
for (let index = 1; index < num; index++) {
    if(num % index === 0 ){
        result += index
    }
    
}
if(result === num){
    console.log(`We have a perfect number!`)
}else{
    console.log("It's not so perfect.")

}

}
solve(1236498)
solve(28)
