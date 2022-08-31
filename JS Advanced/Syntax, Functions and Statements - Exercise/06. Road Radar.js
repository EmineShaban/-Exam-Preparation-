function solve(speed, area) {
    let diff = 0
    let sp = 0
    if (area === 'motorway') {
        sp = 130
        if (speed >= 130) {
            diff = speed - 130
        }
    } else if (area === 'interstate') {
        sp = 90
        if (speed >= 90) {
            diff = speed - 90
        }
    } else if (area === 'city') {
        sp = 50
        if (speed >= 50) {
            diff = speed - 50
        }
    } else if (area === 'residential') {
        sp = 20
        if (speed >= 20) {
            diff = speed - 20
        }
    }
    let res = ''
    if (diff <= 20) {
        res = 'speeding'
    } else if (diff <= 40) {
        res = 'excessive speeding'
    } else {
        res = 'reckless driving'
    }
    if (diff === 0) {
        console.log(`Driving ${speed} km/h in a ${sp} zone`)
    } else {
        console.log(`The speed is ${diff} km/h faster than the allowed speed of ${sp} - ${res}`)
    }
}
solve(40, 'city')
console.log("------")
solve(21, 'residential')