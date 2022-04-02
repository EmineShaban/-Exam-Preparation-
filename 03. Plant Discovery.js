function solve(input) {
    let numsOfPlants = input.shift()
    let result = {}
    let count = 1
    for (let i = 0; i < numsOfPlants; i++) {
        let [plant, rarity] = input.shift().split("<->")
        result[plant] = [rarity, []]
    }
    while (input[0] !== 'Exhibition') {
        let [command, secondPart] = input.shift().split(": ")
        if (command === 'Rate') {
            let [plant, rating] = secondPart.split(" - ")
            if (result.hasOwnProperty(plant)) {
                rating = Number(rating)
                result[plant][1].push(rating)
            } else {
                console.log("error")
            }
        } else if (command === 'Update') {
            let [plant, rarity] = secondPart.split(" - ")
            if (result.hasOwnProperty(plant)) {
                result[plant][0] = [rarity]
            } else {
                console.log("error")
            }
        } else if (command === 'Reset') {
            let [plant, rating] = secondPart.split(" - ")
            if (result.hasOwnProperty(plant)) {
                result[plant][1] = []
            } else {
                console.log("error")
            }
        }
    }
    if (input[0] == 'Exhibition') {
        console.log(`Plants for the exhibition:`)
        for (const pl in result) {
            if(result[pl][1].length == 0){
                console.log(`- ${pl}; Rarity: ${result[pl][0]}; Rating: 0.00`)
                continue;
            }
            console.log(`- ${pl}; Rarity: ${result[pl][0]}; Rating: ${(result[pl][1].reduce((a, b) => a+b) / result[pl][1].length).toFixed(2)}`)

        }
    }
}
solve(["3",
    "Arnoldii<->4",
    "Woodii<->7",
    "Welwitschia<->2",
    "Rate: Woodii - 10",
    "Rate: Welwitschia - 7",
    "Rate: Arnoldii - 3",
    "Rate: Woodii - 5",
    "Update: Woodii - 5",
    "Reset: Arnoldii",
    "Exhibition"])