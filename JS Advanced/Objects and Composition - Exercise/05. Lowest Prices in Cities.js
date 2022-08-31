function solve(arr) {
    let products = []
    while (arr.length > 0) {
        let [town, product, price] = arr.shift().split(' | ')
        if (products.filter(x => x.product === product).length > 0) {
            let obj = products.find(x => x.product === product)
            if (obj.price > Number(price)) {
                obj.price = Number(price)
                obj.town = town
            }
        } else {
            let obj = { product, town, price: Number(price) }
            products.push(obj)
        }
    }
    for (let prod of products) {

        console.log(`${prod.product} -> ${prod.price} (${prod.town})`)
    }

    // Sample Product -> 1000 (Sample Town)
    // Orange -> 2 (Sample Town)
    // Peach -> 1 (Sample Town)
    // Burger -> 10 (New York)



}
solve(['Sample Town | Sample Product | 1000',
    'Sample Town | Orange | 2',
    'Sample Town | Peach | 1',
    'Sofia | Orange | 3',
    'Sofia | Peach | 2',
    'New York | Sample Product | 1000.1',
    'New York | Burger | 10'])
console.log("------")
// solve()