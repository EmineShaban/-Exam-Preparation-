function solve(input) {
    let targets = {}
    let line = input.shift()

    while (line !== 'Sail') {
        let [city, population, gold] = line.split("||")

        if (!targets.hasOwnProperty(city)) {
            targets[city] = [Number(population), Number(gold)]
        } else {
            targets[city][0] += Number(population)
            targets[city][1] += Number(gold)
        }

        line = input.shift()
    }

    line = input.shift()
    while (line !== 'End') {
        let [command, city, index2, gold] = line.split('=>')

        if (command == 'Plunder') {
            targets[city][0] -= Number(index2)
            targets[city][1] -= Number(gold)

            if ((targets[city][0] <= 0) || (targets[city][1] <= 0)) {
                if (targets[city][0] < 0) {
                    index2 = Number(index2) + Number(targets[city][0])
                } else if (targets[city][1] < 0) {
                    gold = Number(gold) + Number(targets[city][1])
                }
                delete targets[city]
                console.log(`${city} plundered! ${gold} gold stolen, ${index2} citizens killed.`)
                console.log(`${city} has been wiped off the map!`)
            } else {
                console.log(`${city} plundered! ${gold} gold stolen, ${index2} citizens killed.`)
            }
        } else if (command == 'Prosper') {
            let amountOfGold = Number(index2)
            if (amountOfGold > 0) {
                targets[city][1] += amountOfGold
                console.log(`${index2} gold added to the city treasury. ${city} now has ${targets[city][1]} gold.`)
            } else {
                console.log("Gold added cannot be a negative number!")
            }
        }
        line = input.shift()
    }
    if (line === 'End') {
        let citiesToPrint = Object.values(targets).length
        if (citiesToPrint < 0) {
            console.log("Ahoy, Captain! All targets have been plundered and destroyed!")
        } else {
            console.log(`Ahoy, Captain! There are ${citiesToPrint} wealthy settlements to go to:`)
            Object.entries(targets).forEach((key) => {
                console.log(`${key[0]} -> Population: ${key[1][0]} citizens, Gold: ${key[1][1]} kg`)
            })
        }
    }
}
solve(["Tortuga||345000||1250",
    "Santo Domingo||240000||630",
    "Havana||410000||1100",
    "Sail",
    "Plunder=>Tortuga=>75000=>380",
    "Prosper=>Santo Domingo=>180",
    "End"])
console.log("------------------")
solve(["Nassau||95000||1000",
    "San Juan||930000||1250",
    "Campeche||270000||690",
    "Port Royal||320000||1000",
    "Port Royal||100000||2000",
    "Sail",
    "Prosper=>Port Royal=>-200",
    "Plunder=>Nassau=>94000=>750",
    "Plunder=>Nassau=>1000=>150",
    "Plunder=>Campeche=>150000=>690",
    "End"])


    // Tortuga plundered! 380 gold stolen, 75000 citizens killed.
    // 180 gold added to the city treasury. Santo Domingo now has 810 gold.
    // Ahoy, Captain! There are 3 wealthy settlements to go to:
    // Tortuga -> Population: 270000 citizens, Gold: 870 kg
    // Santo Domingo -> Population: 240000 citizens, Gold: 810 kg
    // Havana -> Population: 410000 citizens, Gold: 1100 kg

    // Gold added cannot be a negative number!
    // Nassau plundered! 750 gold stolen, 94000 citizens killed.
    // Nassau plundered! 150 gold stolen, 1000 citizens killed.
    // Nassau has been wiped off the map!
    // Campeche plundered! 690 gold stolen, 150000 citizens killed.
    // Campeche has been wiped off the map!
    // Ahoy, Captain! There are 2 wealthy settlements to go to:
    // San Juan -> Population: 930000 citizens, Gold: 1250 kg
    // Port Royal -> Population: 420000 citizens, Gold: 3000 kg