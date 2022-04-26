function solve(arr){
let array = arr.toString().split('>>')
let sumFamily = 0
let sumheavyDuty = 0
let sumSports = 0
let total = 0
for(let i = 0; i< array.length; i++){
    let token = array[i].split(' ')
    let car = token[0]
    let years = token[1]
    let killometres = token[2]

    if(car === 'family'){
        sumFamily = (Math.floor(killometres / 3000) * 12) + (50 - years * 5)
        console.log(`A ${car} car will pay ${sumFamily.toFixed(2)} euros in taxes.`)
        total += sumFamily
    }else if(car === 'heavyDuty'){
        sumheavyDuty = (Math.floor(killometres / 9000) * 14) + (80 - years * 8)
        console.log(`A ${car} car will pay ${sumheavyDuty.toFixed(2)} euros in taxes.`)
        total += sumheavyDuty
    }else if(car === 'sports'){
        sumSports = (Math.floor(killometres / 2000) * 18) + (100 - years * 9)
        console.log(`A ${car} car will pay ${sumSports.toFixed(2)} euros in taxes.`)
        total += sumSports
    }else{
        console.log(`Invalid car type.`)
    }
}
console.log(`The National Revenue Agency will collect ${total.toFixed(2)} euros in taxes.`)

}
solve(([ 'family 3 7210>>van 4 2345>>heavyDuty 9 31000>>sports 4 7410' ]))
solve(([ 'family 5 3210>>pickUp 1 1345>>heavyDuty 7 21000>>sports 5 9410>>family 3 9012' ]))