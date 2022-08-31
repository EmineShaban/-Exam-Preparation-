function vacation(groupOfPeople, typeOfTheGroup, dayOfTheWeek) {
    let studentFriday = 8.45
    let studentSaturday = 9.80
    let studentSunday = 10.46

    let bussinesFriday = 10.90
    let bussinesSaturday = 15.60
    let bussinesSunday = 16
    
    let regularFriday = 15
    let regularSaturday = 20
    let regularSunday = 22.50

    let totalPrice = 0
    if (typeOfTheGroup === "Business" && groupOfPeople >= 100) {
        groupOfPeople -= 10
    }
    if (typeOfTheGroup === "Students" && dayOfTheWeek === "Friday") {
        totalPrice += groupOfPeople * studentFriday
    } else if (typeOfTheGroup === "Students" && dayOfTheWeek === "Saturday") {
        totalPrice += groupOfPeople * studentSaturday
    } else if (typeOfTheGroup === "Students" && dayOfTheWeek === "Sunday") {
        totalPrice += groupOfPeople * studentSunday
    } else if (typeOfTheGroup === "Business" && dayOfTheWeek === "Friday") {
        totalPrice += groupOfPeople * bussinesFriday
    } else if (typeOfTheGroup === "Business" && dayOfTheWeek === "Saturday") {
        totalPrice += groupOfPeople * bussinesSaturday
    } else if (typeOfTheGroup === "Business" && dayOfTheWeek === "Sunday") {
        totalPrice += groupOfPeople * bussinesSunday
    } else if (typeOfTheGroup === "Regular" && dayOfTheWeek === "Friday") {
        totalPrice += groupOfPeople * regularFriday
    } else if (typeOfTheGroup === "Regular" && dayOfTheWeek === "Saturday") {
        totalPrice += groupOfPeople * regularSaturday
    } else if (typeOfTheGroup == "Regular" && dayOfTheWeek === "Sunday") {
        totalPrice += groupOfPeople * regularSunday
    }
    
    if (typeOfTheGroup == "Students" && groupOfPeople >= 30) {
        totalPrice = totalPrice * 0.85
    }
    if (typeOfTheGroup == "Regular" && groupOfPeople >= 10 && groupOfPeople <= 20) {
        totalPrice = totalPrice * 0.95
    }
    
    console.log(`Total price: ${totalPrice.toFixed(2)}`)
}
vacation(100,
    "Business",
    "Friday") 