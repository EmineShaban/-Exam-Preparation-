function solve(arr, num){
    //let newArr = []
    for (let index = 0; index < num; index++) {
        let currNum = arr.shift()
        arr.push(currNum)    
    }
    
    console.log(arr.join(" "))
    
    }