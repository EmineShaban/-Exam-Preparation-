function solve(arr) {
    let input = arr[0]
    let pattern = /([#\|])(?<itemName>[A-Za-z\s]+)\1(?<date>[0-9]{2}\/[0-9]{2}\/[0-9]{2})\1(?<calories>[0-9]{0,5})\1/g
    let result = null
    let total = 0
    let provisions = []
    let normcalories = 2000
    while ((result = pattern.exec(input))) {
        let itemName = result.groups['itemName']
        let date = result.groups['date']
        let calories = Number(result.groups['calories'])
        total += Number(calories)
        provisions.push(`Item: ${itemName}, Best before: ${date}, Nutrition: ${calories}`)
    }
    let days = Math.floor(total / normcalories)
    console.log(`You have food to last you for: ${days} days! `)
    console.log(provisions.join("\n"))
}
solve(['#Bread#19/03/21#1000#|Invalid|03/03.20||Apples|08/10/20|500||Carrots|06/08/20|500||Not right|6.8.20|5|'])
console.log("------------------")
solve(['$$#@@%^&#Fish#24/12/20#8500#|#Incorrect#19.03.20#450|$5*(@!#Ice Cream#03/10/21#9000#^#@aswe|Milk|05/09/20|2000|'])
solve(['Hello|#Invalid food#19/03/20#450|$5*(@'])
