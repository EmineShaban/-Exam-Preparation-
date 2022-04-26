function solve(num){
    let result = ""
for (let index = 10; index <= 100; index++) {
    if(index<=num &&  index % 10  === 0){
        result += "%"
    }

    if(index>num && index % 10 === 0 ){
        result += "."

    }
}
if(num === 100){
    console.log("100% Complete!")
    console.log(`[${result}]`)  
}else{
    console.log(`${num}% [${result}]`)
    console.log('Still loading...')
}

}
solve(30)
solve(50)
solve(100)

// 50% [%%%%%.....]
// Still loading...