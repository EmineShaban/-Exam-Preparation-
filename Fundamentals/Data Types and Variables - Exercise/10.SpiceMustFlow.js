function solve(spice) {
    let sumSpice = 0
    let days = 0
    while (spice >= 100) {
        days++
        sumSpice += spice - 26
        spice -= 10
    }
    console.log(days)
    if (days != 0) {
        console.log(sumSpice - 26)
    } else {
        console.log(sumSpice)
    }
}
solve(111)
solve(450)