function solve(arr1, arr2){
let newarr = []
        for (let k = 0; k < arr1.length; k++){
            if (k % 2 === 0){
                newarr.push(Number(arr1[k]) + Number(arr2[k]))
            }else{
                newarr.push(`${arr1[k]}${arr2[k]}`)
            }
        }
    console.log(newarr.join(" - "))
}
solve(['5', '15', '23', '56', '35'],
['17', '22', '87', '36', '11'])
solve(['13', '12312', '5', '77', '4'],
['22', '333', '5', '122', '44'])