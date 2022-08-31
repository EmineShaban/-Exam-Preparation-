function solve(input) {
    let obj = {}
    let buttle = {}
    for (let i = 0; i < input.length; i++) {
        let [name, quantity] = input[i].split(' => ')
        quantity = Number(quantity)
        if (!obj[name]) {
            obj[name] = 0
        }
        obj[name] += quantity
        if (obj[name] >= 1000) {
            if (!buttle[name]) {
                buttle[name] = 0
            }
            let quantityOfButtles = Math.trunc((obj[name]) / 1000)
            buttle[name] += quantityOfButtles
        }
        obj[name] = quantity % 1000
    }
    for (const key in buttle) {
        console.log(`${key} => ${buttle[key]}`)
    }
}
solve(['Orange => 2000',
    'Peach => 1432',
    // 'Banana => 450',
    'Peach => 600']);
console.log('--------------------')
solve(['Kiwi => 234',
    'Pear => 2345',
    'Watermelon => 3456',
    'Kiwi => 4567',
    'Pear => 5678',
    'Watermelon => 6789']);

// Orange => 2
// Peach => 2

//Pear => 8
// Watermelon => 10
// Kiwi => 4