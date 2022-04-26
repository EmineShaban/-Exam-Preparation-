function solve(arr){
    let type = arr.pop()
    let sum = 0 
    let tax = 0
    let total = 0 
    for (let num of arr) {
        if(num > 0){
            sum += Number(num)
        }else{
            console.log('Invalid price!')
        }
    }
    if(sum === 0){
       return console.log('Invalid order!')
    }
        tax = sum * 0.2
        total = tax + sum
        if(type === 'special'){
            total -= total * 10 /100
        }
        console.log("Congratulations you've just bought a new computer!")
        console.log(`Price without taxes: ${sum.toFixed(2)}$`)
        console.log(`Taxes: ${tax.toFixed(2)}$`)
        console.log('-----------')
        console.log(`Total price: ${total.toFixed(2)}$`)   
    }
solve(([
    '1050',
    '200',
    '450',
    '2',
    '18.50',
    '16.86',
    'special'
    ]))
// solve(([
//     'regular'
//     ]))
// solve([
//     '1023',
//     '15',
//     '-20',
//     '-5.50',
//     '450',
//     '20',
//     '17.66',
//     '19.30', 
//     'regular'
// ])