function solve(array){
    let newArr = []
for (const arr of array) {
    let [comm, text] = arr.split(' ')
    // console.log(comm)
if (comm === 'add'){
    newArr.push(text)
}else if(comm === 'remove'){
    let ind = newArr.indexOf(text)
    newArr.splice(ind, 1)
}else{
    console.log(newArr.join(','))
}
}
}
solve(['add hello', 'add again', 'remove hello', 'add again', 'print'])