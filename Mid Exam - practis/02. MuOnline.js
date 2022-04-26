function solve(command) {
    let comm = command.toString().split('|')
    let bitcoin = 0
    let health = 100
    let room = 0
    let newH = 0
    for (let i = 0; i < comm.length; i++) {
        room++
        let token = comm[i].split(' ')
        let deistvie = token[0]
        let num = Number(token[1])
        if (deistvie === 'potion') {
            health =health + num
            if (health >= 100) {
                let newHelth = health - 100
                num = num - newHelth
                health = 100
                console.log(`You healed for ${num} hp.`)
                console.log(`Current health: ${health} hp.`)          
            } else {
                console.log(`You healed for ${num} hp.`)
                console.log(`Current health: ${health} hp.`)
            }
        } else if (deistvie === 'chest') {
            bitcoin += num
            console.log(`You found ${num} bitcoins.`)
        } else {
            if (health > 0) {
                health -= num
                if (health <= 0) {
                    console.log(`You died! Killed by ${deistvie}.`)
                    console.log(`Best room: ${room}`)
                    break;
                } else {
                    console.log(`You slayed ${deistvie}.`)
                }
            }
        }
    }
    if (health > 0) {
        console.log("You've made it!")
        console.log(`Bitcoins: ${bitcoin}`)
        console.log(`Health: ${health}`)
    }
}
solve(["rat 10|bat 20|potion 10|rat 10|chest 100|boss 70|chest 1000"])
solve(["cat 10|potion 30|orc 10|chest 10|snake 25|chest 110"])

// You slayed rat.
// You slayed bat.
// You healed for 10 hp.
// Current health: 80 hp.
// You slayed rat.
// You found 100 bitcoins.
// You died! Killed by boss.
// Best room: 6

// You slayed cat.
// You healed for 10 hp.
// Current health: 100 hp.
// You slayed orc.
// You found 10 bitcoins.
// You slayed snake.
// You found 110 bitcoins.
// You've made it!
// Bitcoins: 120
// Health: 65
