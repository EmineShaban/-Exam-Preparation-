function solve(arr){
let result = new Set
for (let info of arr) {
    let [direction, numberCar] = info.split(", ")
    if (direction === 'IN'){
        result.add(numberCar)
    }else{
result.delete(numberCar)
}
}
if (result.size === 0){
    console.log('Parking Lot is Empty')
}else{
let sorted = Array.from(result).sort()
for (const num of sorted) {
    
    console.log(num)
}
}
}
solve(['IN, CA2844AA',
'IN, CA1234TA',
'OUT, CA2844AA',
'IN, CA9999TT',
'IN, CA2866HI',
'OUT, CA1234TA',
'IN, CA2844AA',
'OUT, CA2866HI',
'IN, CA9876HH',
'IN, CA2822UU'])
console.log("-------------------------------")
solve(['IN, CA2844AA',
'IN, CA1234TA',
'OUT, CA2844AA',
'OUT, CA1234TA'])
//Parking Lot is Empty
//CA2822UU
// CA2844AA
// CA9876HH
// CA9999TT