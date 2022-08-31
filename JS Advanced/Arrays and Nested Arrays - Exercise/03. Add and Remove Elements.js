function solve(arr){
let newArr = []
let a = 1
for (const comm of arr) {
    if(comm === 'add'){
        newArr.push(a)
        a++
    }else{
        // newArr.push(a)
        a++
        newArr.pop()
    }
}
if(newArr.length <=0){
console.log("Empty")
}else{
console.log(newArr.join('\n'))
}

}
solve(['add', 
'add', 
'add', 
'add']
)
console.log("------")
solve(['add', 
'add', 
'remove', 
'add', 
'add'])