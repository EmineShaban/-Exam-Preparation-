function solve(arr1, arr2){
    let newarr = []
    //    for (let i = 0; i < arr1.length; i++){
            
            for (let k = 0; k < arr1.length; k++){
                if (k % 2 === 0){
                    newarr.push(Number(arr1[k]) + Number(arr2[k]))
                }else{
                    newarr.push(`${arr1[k]}${arr2[k]}`)
                }
            }
    
     //   }
        console.log(newarr.join(" - "))
    }