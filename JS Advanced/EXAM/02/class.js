class SmartHike {
    constructor(username) {
        this.username = username
        this.goals = {}
        this.listOfHikes = []
        this.resources = 100

    }

    addGoal(peak, altitude) {
        if (this.goals.hasOwnProperty(peak)) {
            return `${peak} has already been added to your goals`
        }
        this.goals[peak] = altitude
        return `You have successfully added a new goal - ${peak}`
    }
    hike(peak, time, difficultyLevel) {
        let peak1 = this.goals.hasOwnProperty(peak)
        if (!peak1) {
            throw new Error(`${peak} is not in your current goals`)
        }
        if (this.resources <= 0) {
            return `You don't have enough resources to start the hike`
        }
        if ((this.resources - time * 10) <= 0) {
            return `You don't have enough resources to complete the hike`
        }
        this.resources -= time * 10
        this.listOfHikes.push({ peak, time, difficultyLevel })
        return `You hiked ${peak} peak for ${time} hours and you have ${this.resources}% resources left`
    }
    rest(time) {
        this.resources += time * 10
        if (this.resources >= 100) {
            this.resources = 100
            return `Your resources are fully recharged. Time for hiking!`
        }
        return `You have rested for ${time} hours and gained ${time * 10}% resources`

    }
    showRecord(criteria) {
        // console.log(this.goals)
        let result = []
        if (this.listOfHikes.length === 0) {
            return `${this.username} has not done any hiking yet`
        }
        if (criteria === 'hard' || criteria === "easy") {
            let diff = this.listOfHikes.find(e => e.difficultyLevel === criteria)
            if (!this.listOfHikes.includes(diff)) {
                return `${this.username} has not done any ${criteria} hiking yet`
            }
            if (diff.difficultyLevel === 'hard') {
                // let result = []
                result.push(diff)
                // console.log('b')
                
            } else if (diff.difficultyLevel === 'easy') {
                //                 let sorted = this.listOfHikes.sort((a, b) => a.time - b.time)
                //                 let a = sorted.map(e => `${this.username}'s best ${criteria} hike is ${e.peak} peak, for ${e.time} hours`)
                // return a.shift()
            }
            result.sort((a, b) => a.time - b.time)
        } else {
            let text = `All hiking records:\n`
            text += this.listOfHikes.map(e => `${this.username} hiked ${e.peak} for ${e.time} hours\n`)
            return text.trim()
        }
        let first = result.shift()

        // return first.map(e => `${this.username}'s best ${criteria} hike is ${e.peak} peak, for ${e.time} hours`)
    }
}

// const user = new SmartHike('Vili');
// console.log(user.addGoal('Musala', 2925));
// console.log(user.addGoal('Rui', 1706));
// console.log(user.addGoal('Musala', 2925));

// // You have successfully added a new goal - Musala
// // You have successfully added a new goal - Rui 
// // Musala has already been added to your goals

// const user = new SmartHike('Vili');
// console.log(user.addGoal('Musala', 2925));
// console.log(user.addGoal('Rui', 1706));
// console.log(user.hike('Musala', 8, 'hard'));
// console.log(user.hike('Rui', 3, 'easy'));
// console.log(user.hike('Everest', 12, 'hard'));


// // You have successfully added a new goal - Musala
// // You have successfully added a new goal - Rui
// // You hiked Musala peak for 8 hours and you have 20% resources left 
// // You don’t have enough resources to complete this hike
// // Uncaught Error: Everest is not in your current goals

// const user = new SmartHike('Vili');
// console.log(user.addGoal('Musala', 2925));
// console.log(user.hike('Musala', 8, 'hard'));
// console.log(user.rest(4));
// console.log(user.rest(5));


// // You have successfully added a new goal - Musala
// // You hiked Musala peak for 8 hours and you have 20% resources left 
// // You have rested for 4 hours and gained 40% resources 
// // Your resources are fully recharged. Time for hiking!

const user = new SmartHike('Vili');
// user.addGoal('Musala', 2925);
// user.hike('Musala', 8, 'hard');
// console.log(user.showRecord('easy'));
user.addGoal('Vihren', 2914);
user.hike('Vihren', 6, 'hard');
user.addGoal('Rui', 1706);
user.hike('Rui', 1, 'easy');
user.addGoal('aa', 1706);
user.hike('aa', 3, 'hard');
user.addGoal('bb', 1706);
user.hike('bb', 2, 'hard');
console.log(user.showRecord('hard'));
// user.hike('Rui', 3, 'easy');
// console.log(user.showRecord('all'));


// Vili has not done any easy hiking yet
// Vili's best hard hike is Musala peak, for 8 hours
// All hiking records:
// Vili hiked Musala for 8 hours