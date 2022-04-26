function solve(arrInShop, deliveryArr) {
let storedProduct = {}
    for (let i = 0; i < arrInShop.length; i+=2) {
        let product = arrInShop[i];
        storedProduct[product] = Number(arrInShop[i+1]);
    }
    for (let index = 0; index < deliveryArr.length; index+=2) {
        let product = deliveryArr[index];
        if(!storedProduct.hasOwnProperty(product)){
            storedProduct[product] = 0
        }
        storedProduct[product] += Number(deliveryArr[index+1]);
    }
    for (let products of Object.keys(storedProduct)) {
        console.log(`${products} -> ${storedProduct[products]}`)
    }
}
solve(['Chips', '5', 'CocaCola', '9', 'Bananas', '14', 'Pasta', '4', 'Beer', '2'],
    ['Flour', '44', 'Oil', '12', 'Pasta', '7', 'Tomatoes', '70', 'Bananas', '30'])
// solve(['Salt', '2', 'Fanta', '4', 'Apple', '14', 'Water', '4', 'Juice', '5'],
// ['Sugar', '44', 'Oil', '12', 'Apple', '7', 'Tomatoes', '7', 'Bananas', '30'])