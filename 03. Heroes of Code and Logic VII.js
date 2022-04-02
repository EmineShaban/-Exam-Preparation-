function solve(input) {
    let heroes = {}
    let countOfHeroes = input.shift()
    for (let i = 0; i < countOfHeroes; i++) {
        let command = input.shift().split(" ")
        let name = command[0]
        let hp = Number(command[1])
        let mp = Number(command[2])
        heroes[name] = {
            hp,
            mp
        }
    }
    while (input[0] != 'End') {
        let tokens = input.shift().split(' - ')
        let command = tokens[0]
        let name = tokens[1]
        let p1 = Number(tokens[2])
        let p2 = tokens[3]
        let hero = heroes[name]
        if (command === 'CastSpell') {
            if (hero.mp >= p1) {
                hero.mp -= p1
                console.log(`${name} has successfully cast ${p2} and now has ${hero.mp} MP!`)
            } else {
                console.log(`${name} does not have enough MP to cast ${p2}!`)
            }
        } else if (command === 'TakeDamage') {
            hero.hp -= p1
            if (hero.hp > 0) {
                console.log(`${name} was hit for ${p1} HP by ${p2} and now has ${hero.hp} HP left!`)
            } else {
                delete heroes[name]
                console.log(`${name} has been killed by ${p2}!`)
            }
        } else if (command === 'Recharge') {
            let mp = Math.min((200 - hero.mp), p1)
            hero.mp += mp
            console.log(`${name} recharged for ${mp} MP!`)
        } else if (command === 'Heal') {
            let hp = Math.min((100 - hero.hp), p1)
            hero.hp += hp
            console.log(`${name} healed for ${hp} HP!`)
        }

    }
    for (const herodate of Object.entries(heroes)) {
        let name = herodate[0]
        let hero = herodate[1]
        console.log(name)
        console.log(`   HP: ${hero.hp}`)
        console.log(`   MP: ${hero.mp}`)
    }
}
solve(['2',
    'Solmyr 85 120',
    'Kyrre 99 50',
    'Heal - Solmyr - 10',
    'Recharge - Solmyr - 50',
    'TakeDamage - Kyrre - 66 - Orc',
    'CastSpell - Kyrre - 15 - ViewEarth',
    'End'])
console.log("------------------")
solve(['4',
    'Adela 90 150',
    'SirMullich 70 40',
    'Ivor 1 111',
    'Tyris 94 61',
    'Heal - SirMullich - 50',
    'Recharge - Adela - 100',
    'CastSpell - Tyris - 1000 - Fireball',
    'TakeDamage - Tyris - 99 - Fireball',
    'TakeDamage - Ivor - 3 - Mosquito',
    'End'])
//     Solmyr healed for 10 HP!
// Solmyr recharged for 50 MP!
// Kyrre was hit for 66 HP by Orc and now has 33 HP left!
// Kyrre has successfully cast ViewEarth and now has 35 MP!
// Solmyr
//   HP: 95
//   MP: 170
// Kyrre
//   HP: 33
//   MP: 35

//     SirMullich healed for 30 HP!
// Adela recharged for 50 MP!
// Tyris does not have enough MP to cast Fireball!
// Tyris has been killed by Fireball!
// Ivor has been killed by Mosquito!
// Adela
//   HP: 90
//   MP: 200
// SirMullich
//   HP: 100
//   MP: 40