function charters(num1, num2){

let first = Math.min(num1.charCodeAt(0), num2.charCodeAt(0))
let second = Math.max(num1.charCodeAt(0), num2.charCodeAt(0))
let arr = []

for (let index = first + 1; index < second; index++) {
    arr.push(String.fromCharCode(index))
    
}

console.log(arr.join(' '))

}
charters('a', 'd')
//charters('#', ':')