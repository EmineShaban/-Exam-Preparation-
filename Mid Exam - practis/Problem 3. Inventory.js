function solve(arr) {
    let array = arr.shift().split(", ")
    for (let i = 0; i < arr.length; i++) {
        let command = arr[i].split(" - ")
        let comm = command[0]
        let num = command[1]
        if (comm === 'Collect') {
            if (array.includes(num)) {
                continue;
            } else {
                array.push(num)
                continue;
            }
        } else if (comm === 'Drop') {
            let number = array.indexOf(num)
            if (number === -1) {
                continue;
            } else {
                array.splice(number, 1)
                continue;
            }
        } else if (comm === 'Combine Items') {
            let a = num.split(':')
            let oldNum = a[0]
            let second = a[1]
            let number = array.indexOf(oldNum)
            if (number === -1) {
                continue;
            } else {
                array.splice(number+1, 0, second)
                continue;
            }
        } else if (comm === 'Renew') {

            let number = array.indexOf(num)
            if (number === -1) {
                continue;
            } else {
                let newWord = array.splice(number, 1)
                array.push(newWord)
                continue;

            }
        } else if(comm === 'Craft!'){
            console.log(array.join(", "))
            break;
        }
    }
}
solve([
    'Iron, Wood, Sword',
    'Collect - Gold',
    'Drop - Wood',
    'Craft!'
])
solve([
    'Iron, Sword',
    'Drop - Bronze',
    'Combine Items - Sword:Bow',
    'Renew - Iron',
    'Craft!'
])
//Iron, Sword, Gold
//Sword, Bow, Iron
