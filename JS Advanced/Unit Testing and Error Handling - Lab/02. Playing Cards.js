function solve(face, suit) {
    let faces = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A']
    let suits = {
        'S': '\u2660',
        'H': '\u2665',
        'D': '\u2666',
        'C': '\u2663',
    }

    if(faces.includes(face) === false){
        throw new Error (`Invalid faces: `+ face)
    }
    if(Object.keys(suits).includes(suit) == false){
        throw new Error (`Invalid suit: `+ suit)
    }

    return {
        face, 
        suit: suits[suit],
        toString(){
            return this.face + this.suit
        }
    }
}
let card = solve('A', 'S')
console.log(card.toString())
// console.log(solve('1', 'C'))