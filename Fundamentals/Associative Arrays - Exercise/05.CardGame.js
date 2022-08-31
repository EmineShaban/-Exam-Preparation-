function solve(input){

    let players = {}
for (let command of input) {
    let [name, cards] = command.split(": ")
    cards = cards.split(", ")
    if(players.hasOwnProperty(name) === false){
        players[name] = new Set
    }

    for (let card of cards) {
        players[name].add(card)
    }
}
console.log(players)





}
solve([
    'Peter: 2C, 4H, 9H, AS, QS',
    'Tomas: 3H, 10S, JC, KD, 5S, 10S',
    'Andrea: QH, QC, QS, QD',
    'Tomas: 6H, 7S, KC, KD, 5S, 10C',
    'Andrea: QH, QC, JS, JD, JC',
    'Peter: JD, JD, JD, JD, JD, JD'
    ])
//     console.log("--------------------------------")
// solve([
//     'John: 2C, 4H, 9H, AS, QS',
//     'Slav: 3H, 10S, JC, KD, 5S, 10S',
//     'Alex: 6H, 7S, KC, KD, 5S, 10C',
//     'Thomas: QH, QC, JS, JD, JC',
//     'Slav: 6H, 7S, KC, KD, 5S, 10C',
//     'Thomas: QH, QC, JS, JD, JC',
//     'Alex: 6H, 7S, KC, KD, 5S, 10C',
//     'Thomas: QH, QC, JS, JD, JC',
//     'John: JD, JD, JD, JD'
//     ])
