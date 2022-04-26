function solve(num1, num2, operator) {
let result = 0
switch(operator){
    case 'multiply': console.log(num1*num2); break;
    case 'divide': console.log(num1 / num2); break;
    case 'add': console.log(num1 + num2); break;
    case 'subtract': console.log(num1 - num2); break;
}


}
solve(5,
    5,
    'multiply')
solve(40,
    8,
    'divide')
solve(12,
    19,
    'add')
solve(50,
    13,
    'subtract')