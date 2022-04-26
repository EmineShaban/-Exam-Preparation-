function solve(n){

    for(let num = 1; num <= n; num++){
        let result = 0
        let numAsStr = String(num)
        for(let i = 0; i < numAsStr.length; i++){
            result += Number(numAsStr[i])
        }
        let special = false
        if(result == "5" || result == "7" || result == "11"){
            special = true
        }
        if(special){
            console.log(`${num} -> True`)
        }else{
            console.log(`${num} -> False`)
        }
    }
}
solve(15)
solve(20)