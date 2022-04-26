function solve(input){
let result = []
for (let info of input) {
    let command = info.split(" / ")
    let hero = command.shift()
    let level = Number(command.shift())
    let predmet = command.toString()

    let currHeroes = {
        hero, 
        level,
        predmet,
    }
    result.push(currHeroes)
}

let sortedHeroes = result.sort((a,b) => a.level - b.level)

for (const hero of sortedHeroes) {
    console.log(`Hero: ${hero.hero}`)
    console.log(`level => ${hero.level}`)
    console.log(`items => ${hero.predmet}`)
}


}
solve([
    'Isacc / 25 / Apple, GravityGun',
    'Derek / 12 / BarrelVest, DestructionSword',
    'Hes / 1 / Desolator, Sentinel, Antara'
    ])
// solve([
//     'Batman / 2 / Banana, Gun',
//     'Superman / 18 / Sword',
//     'Poppy / 28 / Sentinel, Antara'
//     ])
// Hero: Hes
// level => 1
// items => Desolator, Sentinel, Antara
// Hero: Derek
// level => 12
// items => BarrelVest, DestructionSword
// Hero: Isacc
// level => 25
// items => Apple, GravityGun