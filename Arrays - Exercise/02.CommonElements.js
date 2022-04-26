function solve(arr1, arr2){

for (const i of arr1) {
    for (const k of arr2) {
        if(i === k ){
            console.log(k)
        }
    }
    
}


}
solve(['Hey', 'hello', 2, 4, 'Peter', 'e'],
['Petar', 10, 'hey', 4, 'hello', '2'])
solve(['S', 'o', 'f', 't', 'U', 'n', 'i', ' '],
['s', 'o', 'c', 'i', 'a', 'l'])