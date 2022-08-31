class Garden {
    constructor(space) {
        this.spaceAvailable = space
        this.plants = []
        this.storage = []
    }

    addPlant(plantName, spaceRequired) {
        // this.spaceAvailable = Number(this.spaceAvailable)
        this.spaceAvailable -= Number(spaceRequired)
        if (this.spaceAvailable < 0) {
            throw new Error('Not enough space in the garden.')
        }
        this.plants.push({ plantName: plantName, spaceRequired: spaceRequired, ripe: false, quantity: 0 })
        return `The ${plantName} has been successfully planted in the garden.`
    }

    ripenPlant(plantName, quantity) {
        quantity = Number(quantity)
        let plant = this.plants.find(e => e.plantName === plantName)
        
        if (plant == undefined) {
            throw new Error(`There is no ${plantName} in the garden.`)
        }
        if (plant.ripe === true) {
            throw new Error(`The ${plantName} is already ripe.`)
        }
        if (quantity <= 0) {
            throw new Error('The quantity cannot be zero or negative.')
        }

        plant.ripe = true
        plant.quantity += quantity
        if(quantity === 1){
            return `${quantity} ${plantName} has successfully ripened.`
        }else{
            return `${quantity} ${plantName}s have successfully ripened.`
        }

    }
    harvestPlant(plantName) {
        let plant = this.plants.find(e => e.plantName === plantName)
        if (plant === undefined) {
            throw new Error(`There is no ${plantName} in the garden.`)
        }
        if(plant.ripe === false){
            throw new Error (`The ${plantName} cannot be harvested before it is ripe.`)
        }
        this.spaceAvailable += Number(plant.spaceRequired)
        this.storage.push({plantName: plantName, quantity: plant.quantity})
        this.plants.splice(this.plants.indexOf(plant), 1)
        return `The ${plantName} has been successfully harvested.`
    }

    generateReport() {
        let text = `The garden has ${this.spaceAvailable} free space left.\n`
        text += `Plants in the garden: ${this.plants.sort((a, b) => a.plantName.localeCompare(b.plantName)).map(e => e.plantName).join(', ')}\n`
        if(this.storage.length == 0 ){
            text += `Plants in storage: The storage is empty.`
        }else{
            text += `Plants in storage: ${this.storage.map(e => `${e.plantName} (${e.quantity})`).join(', ')}`
        }
        return text.trim()
    }
}
let myGarden = new Garden(250);
console.log(myGarden.addPlant("apple", 20))// assert.equal(myGarden.addPlant("apple", 20), "The apple has been successfully planted in the garden.");
console.log(myGarden.addPlant("orange", 200))// assert.equal(myGarden.addPlant("orange", 200), "The orange has been successfully planted in the garden.");
console.log(myGarden.addPlant("raspberry", 10))// assert.equal(myGarden.addPlant("raspberry", 10), "The raspberry has been successfully planted in the garden.");
console.log(myGarden.ripenPlant("apple", 10))// assert.equal(myGarden.ripenPlant("apple", 10), "10 apples have successfully ripened.");
console.log(myGarden.ripenPlant("orange", 1))// assert.equal(myGarden.ripenPlant("orange", 1), "1 orange has successfully ripened.");
console.log(myGarden.harvestPlant("orange"))// assert.equal(myGarden.harvestPlant("orange"), "The orange has been successfully harvested.");
console.log(myGarden.generateReport())// assert.equal(myGarden.generateReport(), "The garden has 220 free space left.\nPlants in the garden: apple, raspberry\nPlants in storage: orange (1)");

