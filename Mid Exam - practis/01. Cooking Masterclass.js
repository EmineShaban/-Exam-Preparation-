function solve(arr) {
    arr.map(Number)
let money = arr[0]
let students = arr[1]
let priceFlour = arr[2]
let priceOneEgg = arr[3]
let priceFartuh = arr[4]
let flour = 0
let total = 0
let fartuh = priceFartuh * (students + Math.ceil(students * 0.2)) 
let eggs = priceOneEgg *10 * students
// if (students % 5 === 0){
//     let free = students / 5 
//     flour = (priceFlour * students) - (free * priceFlour)
// }else{
    flour = (priceFlour * students) - (Math.floor(students/ 5) * priceFlour)

total = fartuh + eggs + flour
let diff = Math.abs(money - total)
if(money >= total){
    console.log(`Items purchased for ${total.toFixed(2)}$.`)
}else{
    console.log(`${diff.toFixed(2)}$ more needed.`)
}
}
solve(([50,
    2,
    1.0,
    0.10,
    10.0]))
solve(([100,
    25,
    4.0,
    1.0,
    6.0]))
solve(([946,
    20,
    12.05,
    0.42,
    27.89]))
