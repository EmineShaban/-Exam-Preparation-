function solve(arr) {
    let isTrue = false

    for(let i = 0; i < arr.length; i++) {
        let rightSum = 0
        let leftSum = 0
        for (let k = i - 1; k >= 0 ; k--){
            leftSum+=arr[k]
        }
        for(let j = i + 1; j < arr.length; j++){
            rightSum+=arr[j]
        }
        if(leftSum === rightSum){
            console.log(i)
            isTrue=true
        }
    }
if(!isTrue){
    console.log("no")
}


}