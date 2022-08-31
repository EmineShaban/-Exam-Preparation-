class VegetableStore {
    constructor(owner, location) {
        this.owner = owner
        this.location = location
        this.availableProducts = []
        // this.totalPrice = 0.00
    }
    loadingVegetables(vegetables) {
        for (let i = 0; i < vegetables.length; i++) {
            let [type, quantity, price] = vegetables[i].split(' ')
            quantity = Number(quantity)
            price = Number(price)
            let ovosh = this.availableProducts.find(e => e.type === type)
            if (ovosh) {
                ovosh.quantity += quantity
                if (ovosh.price < price) {
                    ovosh.price = price
                }
            } else {
                this.availableProducts.push({ type: type, quantity: quantity, price: price, totalPrice: 0 })
            }
        }
        let text = `Successfully added `
        text += this.availableProducts.map(e => `${e.type}`).join(', ')
        return text
    }


    buyingVegetables(selectedProducts) {
        let sum = 0
        for (let i = 0; i < selectedProducts.length; i++) {
            let [veg, quant] = selectedProducts[i].split(' ')
            quant = Number(quant)
            let ovosh = this.availableProducts.find(e => e.type === veg)
            if (!ovosh) {
                throw new Error(`${veg} is not available in the store, your current bill is $${sum.toFixed(2)}.`)
            }
            if (ovosh.quantity < quant) {
                throw new Error(`The quantity ${quant} for the vegetable ${veg} is not available in the store, your current bill is $${sum.toFixed(2)}.`)
            }
            
            sum += Number(quant) * ovosh.price
            ovosh.quantity -= quant
        }
        return `Great choice! You must pay the following amount $${sum.toFixed(2)}.`
    }

    rottingVegetable(type, quantity) {
        let ovosh = this.availableProducts.find(e => e.type === type)
        if (!ovosh) {
            throw new Error(`${type} is not available in the store.`)
        }
        if (quantity >= ovosh.quantity) {
            ovosh.quantity = 0
            return `The entire quantity of the ${type} has been removed.`
        }
        ovosh.quantity -= quantity
        return `Some quantity of the ${type} has been removed.`
    }
    revision() {
        let text = `Available vegetables:\n`
        let sorted = this.availableProducts.sort((a, b) => b.quantity - a.quantity)
        text += sorted.map(a => `${a.type}-${a.quantity}-$${a.price}\n`).join('')
        text+= `The owner of the store is ${this.owner}, and the location is ${this.location}.`
        return text
    }

}
// let vegStore = new VegetableStore("Jerrie Munro", "1463 Pette Kyosheta, Sofia");
// console.log(vegStore.loadingVegetables(["Okra 2.5 3.5", "Beans 10 2.8", "Celery 5.5 2.2", "Celery 0.5 2.5"]));
// console.log(vegStore.rottingVegetable("Okra", 1));
// console.log(vegStore.rottingVegetable("Okra", 2.5));
// console.log(vegStore.buyingVegetables(["Beans 8", "Celery 1.5"]));
// console.log(vegStore.revision());

// Successfully added Okra, Beans, Celery 
// Some quantity of the Okra has been removed. 
// The entire quantity of the Okra has been removed. 
// Great choice! You must pay the following amount $26.15.
// Available vegetables:
// Celery-4.5-$2.5
// Beans-2-$2.8
// Okra-0-$3.5
// The owner of the store is Jerrie Munro, and the location is 1463 Pette Kyosheta, Sofia.

let vegStore = new VegetableStore("Jerrie Munro", "1463 Pette Kyosheta, Sofia");
console.log(vegStore.loadingVegetables(["Okra 2.5 3.5", "Beans 10 2.8", "Celery 5.5 2.2", "Celery 0.5 2.5"]));
console.log(vegStore.rottingVegetable("Okra", 1));
console.log(vegStore.rottingVegetable("Okra", 2.5));
console.log(vegStore.buyingVegetables(["Beans 8", "Okra 1.5"]));

// Successfully added Okra, Beans, Celery 
// Some quantity of the Okra has been removed. 
// The entire quantity of the Okra has been removed. 
// Uncaught Error: The quantity 1.5 for the vegetable Okra is not available in the store, your current bill is $22.40.