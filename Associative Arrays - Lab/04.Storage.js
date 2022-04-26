function solve(arr){
let result = {}
let plus = 0

for (let comm of arr) {
    let [name, count] = comm.split(" ")
    count = Number(count)
    if(result.hasOwnProperty(name)){
        plus = count
        result[name] += plus

    }else{
        //console.log(result[count])
   
        result[name] = count
    }

}
for (const key in result) {
    
    console.log(key, "->", result[key])
}


}
solve(['tomatoes 10',
'coffee 5',
'olives 100',
'coffee 40'])
console.log("-----------")
solve(['apple 50',
'apple 61',
'coffee 115',
'coffee 40'])