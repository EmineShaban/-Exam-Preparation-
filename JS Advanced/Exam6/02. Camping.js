class SummerCamp {
    constructor(organizer, location) {
        this.organizer = organizer
        this.location = location
        this.priceForTheCamp = { "child": 150, "student": 300, "collegian": 500 }
        this.listOfParticipants = []
        // this.sum = 0
    }

    registerParticipant(name, condition, money) {
        let sum = 0
        money = Number(money)
        if (condition != 'child' && condition != 'student' && condition != 'collegian') {
            throw new Error(`Unsuccessful registration at the camp.`)
        }
        let pochivka = this.listOfParticipants.find(e => e.name === name)
        if (this.listOfParticipants.includes(pochivka)) {
            sum += money
            return `The ${name} is already registered at the camp.`
        }
        sum += money
        if (condition)
            if (Number(this.priceForTheCamp[condition]) > sum) {
                return `The money is not enough to pay the stay at the camp.`
            }
        this.listOfParticipants.push({ name, condition, power: 100, wins: 0 })
        return `The ${name} was successfully registered.`

    }

    unregisterParticipant(name) {
        let pochivka = this.listOfParticipants.find(e => e.name === name)
        if (!this.listOfParticipants.includes(pochivka)) {
            throw new Error(`The ${name} is not registered in the camp.`)
        }
        this.listOfParticipants.splice(this.listOfParticipants.indexOf(pochivka), 1)
        // this.books.splice(this.books.indexOf(bookName), 1)
        console.log(this.listOfParticipants)
        return `The ${name} removed successfully.`
    }

    timeToPlay(typeOfGame, participant1, participant2) {
        if (typeOfGame === 'WaterBalloonFights') {
            let pochivka = this.listOfParticipants.find(e => e.name === participant1)
            let pochivka2 = this.listOfParticipants.find(e => e.name === participant2)
            if (!pochivka || !pochivka2) {
                throw new Error('Invalid entered name/s.')
            }
            if (pochivka.condition !== pochivka2.condition) {
                throw new Error(`Choose players with equal condition.`)
            }
            if (pochivka.power > pochivka2.power) {
                pochivka.wins += 1
                return `The ${participant1} is winner in the game ${typeOfGame}.`
            } else if (pochivka.power < pochivka2.power) {
                pochivka2.wins += 1
                return `The ${participant2} is winner in the game ${typeOfGame}.`
            }

            return `There is no winner.`
        } else if (typeOfGame === 'Battleship') {
            let pochivka = this.listOfParticipants.find(e => e.name === participant1)

            if (!pochivka) {
                throw new Error('Invalid entered name/s.')
            }
            pochivka.power += 20
            return `The ${pochivka.name} successfully completed the game ${typeOfGame}.`


        }
    }

    toString() {
        let text = `${this.organizer} will take ${this.listOfParticipants.length} participants on camping to ${this.location}\n`
        let sorted = this.listOfParticipants.sort((a,b) => b.wins - a.wins)
        text += sorted.map(e => `${e.name} - ${e.condition} - ${e.power} - ${e.wins}\n`).join('')
        return text.trim()
    }


}
// const summerCamp = new SummerCamp("Jane Austen", "Pancharevo Sofia 1137, Bulgaria");
// console.log(summerCamp.registerParticipant("Petar Petarson", "student", 200));
// console.log(summerCamp.registerParticipant("Petar Petarson", "student", 300));
// console.log(summerCamp.registerParticipant("Petar Petarson", "student", 300));

// const summerCamp = new SummerCamp("Jane Austen", "Pancharevo Sofia 1137, Bulgaria");
// console.log(summerCamp.registerParticipant("Petar Petarson", "student", 300));
// console.log(summerCamp.unregisterParticipant("Petar"));
// console.log(summerCamp.unregisterParticipant("Petar Petarson"));

const summerCamp = new SummerCamp("Jane Austen", "Pancharevo Sofia 1137, Bulgaria");
console.log(summerCamp.registerParticipant("Petar Petarson", "student", 300));
console.log(summerCamp.timeToPlay("Battleship", "Petar Petarson"));
console.log(summerCamp.registerParticipant("Sara Dickinson", "child", 200));
// console.log(summerCamp.timeToPlay("WaterBalloonFights", "Petar Petarson", "Sara Dickinson"));
console.log(summerCamp.registerParticipant("Dimitur Kostov", "student", 300));
console.log(summerCamp.timeToPlay("WaterBalloonFights", "Petar Petarson", "Dimitur Kostov"));

// The Petar Petarson was successfully registered.
// The Petar Petarson successfully completed the game Battleship.
// The Sara Dickinson was successfully registered.
// Uncaught Error: Choose players with equal condition.
// The Dimitur Kostov was successfully registered.
// The Petar Petarson is winner in the game WaterBalloonFights.

// const summerCamp = new SummerCamp("Jane Austen", "Pancharevo Sofia 1137, Bulgaria");
// console.log(summerCamp.registerParticipant("Petar Petarson", "student", 300));
// console.log(summerCamp.timeToPlay("Battleship", "Petar Petarson"));
// console.log(summerCamp.registerParticipant("Sara Dickinson", "child", 200));
// // console.log(summerCamp.timeToPlay("WaterBalloonFights", "Petar Petarson", "Sara Dickinson"));
// console.log(summerCamp.registerParticipant("Dimitur Kostov", "student", 300));
// console.log(summerCamp.timeToPlay("WaterBalloonFights", "Petar Petarson", "Dimitur Kostov"));
// console.log(summerCamp.toString());

// The Petar Petarson was successfully registered.
// The Petar Petarson successfully completed the game Battleship.
// The Sara Dickinson was successfully registered.
// Uncaught Error: Choose players with equal condition.
// The Dimitur Kostov was successfully registered.
// The Petar Petarson is winner in the game WaterBalloonFights.
// Jane Austen will take 3 participants on camping to Pancharevo Sofia 1137, Bulgaria
// Petar Petarson - student - 120 - 1
// Sara Dickinson - child - 100 - 0
// Dimitur Kostov - student - 100 - 0
