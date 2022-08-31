function solve(arr, comm){
// console.log(comm)
if(comm == 'asc'){
    arr.sort((a,b) => a-b)
}else if(comm == 'desc'){
    arr.sort((a,b) => b-a)
}

return arr

}
solve([14, 7, 17, 6, 8], 'desc')