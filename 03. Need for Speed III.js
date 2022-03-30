function solve(input) {
    let numOfCars = +input.shift()
    let salon = {}
    for (let i = 0; i < numOfCars; i++) {
        let [car, km, petrol] = input.shift().split('|')
        salon[car] = [Number(km), Number(petrol)]

    }
    while (input[0] != 'Stop') {
        let tokens = input.shift().split(" : ")
        let command = tokens[0]
        let car = tokens[1]
        if (command === 'Drive') {
            if (salon[car][1] >= Number(tokens[3])) {
                salon[car][1] -= Number(tokens[3])
                salon[car][0] += Number(tokens[2])
                console.log(`${car} driven for ${tokens[2]} kilometers. ${tokens[3]} liters of fuel consumed.`)
                if (salon[car][0] >= 100000) {
                    console.log(`Time to sell the ${car}!`)
                    delete salon[car]
                }
            } else {
                console.log('Not enough fuel to make that ride')
            }
        } else if (command === 'Refuel') {
            salon[car][1] += Number(tokens[2])
            if (salon[car][1] > 75) {
                let petr = tokens[2] - (salon[car][1] - 75)
                salon[car][1] = 75
                console.log(`${car} refueled with ${petr} liters`)
            } else {
                console.log(`${car} refueled with ${tokens[2]} liters`)
            }
        } else if (command === 'Revert') {
            salon[car][0] -= Number(tokens[2])
            if (salon[car][0] < 10000) {
                salon[car][0] = 10000
            } else {
                console.log(`${car} mileage decreased by ${tokens[2]} kilometers`)
            }
        }
    }
    if (input[0] == 'Stop') {
        Object.entries(salon).forEach((key) => {
            console.log(`${key[0]} -> Mileage: ${key[1][0]} kms, Fuel in the tank: ${key[1][1]} lt.`)
        })
    }
}
solve([
    '3',
    'Audi A6|38000|62',
    'Mercedes CLS|11000|35',
    'Volkswagen Passat CC|45678|5',
    'Drive : Audi A6 : 543 : 47',
    'Drive : Mercedes CLS : 94 : 11',
    'Drive : Volkswagen Passat CC : 69 : 8',
    'Refuel : Audi A6 : 50',
    'Revert : Mercedes CLS : 500',
    'Revert : Audi A6 : 30000',
    'Stop'
])
console.log("------------------")
solve([
    '4',
    'Lamborghini Veneno|11111|74',
    'Bugatti Veyron|12345|67',
    'Koenigsegg CCXR|67890|12',
    'Aston Martin Valkryie|99900|50',
    'Drive : Koenigsegg CCXR : 382 : 82',
    'Drive : Aston Martin Valkryie : 99 : 23',
    'Drive : Aston Martin Valkryie : 2 : 1',
    'Refuel : Lamborghini Veneno : 40',
    'Revert : Bugatti Veyron : 2000',
    'Stop'
])

