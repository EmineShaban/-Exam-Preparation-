function solve(cars) {
    let car = cars.model
    let power = 0
    let volume = 0
    let type = cars.carriage
    let color = cars.color
    let wheels = 0
    if (cars.power <= 90) {
        power += 90
        volume += 1800
    } else if (cars.power <= 120) {
        power += 120
        volume += 2400
    } else if (cars.power <= 200) {
        power += 200
        volume += 3500  
    }
    let w = [0,0,0,0]
    if (cars.wheelsize % 2 === 0){
        wheels += Number(cars.wheelsize - 1)
        // w.push(wheels)
        w.fill(wheels, 0, 4)
    }else{
        wheels += Number(cars.wheelsize)
        // w.push(wheels)
        w.fill(wheels, 0, 4)
    }
    
    let result = {
        model: car,
        engine : {
            power,
            volume
        },
        carriage : {
            type,
            color
        },
        wheels : w
    }
    return result
}
console.log(solve({
    model: 'VW Golf II',
    power: 90,
    color: 'blue',
    carriage: 'hatchback',
    wheelsize: 14
}))
console.log("------")
console.log(solve({
    model: 'Opel Vectra',
    power: 110,
    color: 'grey',
    carriage: 'coupe',
    wheelsize: 17
}))

// { model: 'VW Golf II',
//   engine: { power: 90,
//             volume: 1800 },
//   carriage: { type: 'hatchback',
//               color: 'blue' },
//   wheels: [13, 13, 13, 13] }