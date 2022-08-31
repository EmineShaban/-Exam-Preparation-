class CarDealership {
    constructor(name){
        this.name= name,
        this.availableCars = [],
        this.soldCars = [],
        this.totalIncome = 0
    }
    addCar (model, horsepower, price, mileage){
        if(model == undefined || horsepower <0 || price<0 || mileage <0 || model === '' || typeof(horsepower) !== 'number'|| typeof(price) !== 'number'|| typeof(mileage) !== 'number') {
            throw new Error ('Invalid input!')
        }
        this.availableCars.push({model: model, horsepower: horsepower, price: price, mileage: mileage})
        return `New car added: ${model} - ${horsepower} HP - ${mileage.toFixed(2)} km - ${price.toFixed(2)}$`
    }
    sellCar (model, desiredMileage){
        desiredMileage = Number(desiredMileage)
        let car = this.availableCars.find(e => e.model === model)
        if(car === undefined){
            throw new Error(`${model} was not found!`)
        }
        let diff = car.mileage - desiredMileage
        if(car.mileage <= desiredMileage){
            
            
        }else if(diff<= 40000){
            car.price-= car.price * 0.05
        }else if(diff >= 40000){
            car.price-= car.price * 0.1
        }
        this.soldCars.push({ model: car.model, horsepower: car.horsepower, soldPrice: car.price })
        this.totalIncome += car.price
        this.availableCars.splice(this.availableCars.indexOf(car), 1)
        // console.log(this.availableCars)
        return `${model} was sold for ${car.price.toFixed(2)}$`
    }
    currentCar (){
        if(this.availableCars.length <= 0){
            return `There are no available cars`
        }else{ 
            return `-Available cars:
${this.availableCars.map(e => `---${e.model} - ${e.horsepower} HP - ${e.mileage.toFixed(2)} km - ${e.price.toFixed(2)}$`).join('\n')}`
        }
    }
    salesReport (criteria){
        if(criteria !== 'horsepower' && criteria !== 'model'){
            throw new Error ('Invalid criteria!')

        }
        if(criteria === 'horsepower'){
            this.soldCars.sort((a, b) => b.horsepower - a.horsepower)
        }else if(criteria === 'model'){
            this.soldCars.sort((a, b) => a.model.localeCompare(b.model))
        }

        let text = `-${this.name} has a total income of ${this.totalIncome.toFixed(2)}$\n`
        text += `-${this.soldCars.length} cars sold:\n`
        text += this.soldCars.map(e => `---${e.model} - ${e.horsepower} HP - ${e.soldPrice.toFixed(2)}$`).join('\n')
        return text

//         {dealershipName} has a total income of {totalIncome}$
// -{soldCarsCount} cars sold:
// ---{model} - {horsepower} HP - {price}$
// ---{model} - {horsepower} HP - {price}$
    }
}

let dealership = new CarDealership('SoftAuto');
dealership.addCar('Toyota Corolla', 100, 3500, 190000);
dealership.addCar('Mercedes C63', 300, 29000, 187000);
dealership.addCar('Audi A3', 120, 4900, 240000);
dealership.sellCar('Toyota Corolla', 230000);
dealership.sellCar('Mercedes C63', 110000);
console.log(dealership.salesReport('model'));