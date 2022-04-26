function solve(typeOfTheDay, age) {
    let price = 0
    if (age >= 0 && age <= 122) {
        switch (typeOfTheDay) {
            case "Weekday":
                if (18 < age && age <= 64) {
                    price = 18;
                    break;
                } else{
                    price = 12;
                    break;
                }
            case "Weekend":
                if (18 < age && age <= 64) {
                    price = 20;
                    break;
                } else{
                    price = 15;
                    break;
                }
            case "Holiday":
                if (age < 18){
                    price = 5
                    break;
                }else if(18 < age && age <= 64){
                    price = 12
                    break;
                } else if (age > 64 && age<= 122){
                    price = 10
                    break;
                }
                }
                console.log (`${price}$`)
    } else {
        console.log('Error!')
    }
}
solve('Weekend', 15)
