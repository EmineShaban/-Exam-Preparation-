function solve(lostFights, helmet, sword, shield, armor) {
    let sum = 0
for (let i = 1; i <= lostFights; i++){
    if (i % 2 == 0) {
        sum += helmet
    }
    if (i % 3 == 0) {
        sum += sword
    }
    if (i % 6 == 0) {
        sum += shield
    }
    if (i % 12 == 0) {
        sum += armor
    }
}
    console.log(`Gladiator expenses: ${sum} aureus`)
}
solve(7,
    2,
    3,
    4,
    5)
//solve()