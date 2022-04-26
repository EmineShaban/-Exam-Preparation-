function solve(arr) {
    let total = 0
    for (let line of arr) {
        let regex = /%(?<name>[A-Z][a-z]+)%[^|$%.]*<(?<product>\w+)>[^|$%.]*\|(?<count>\d+)\|([^\d]*)?(?<price>\d+(.\d+)?)\$/gm
        let result = regex.exec(line)
        if (result) {
            let name = result.groups.name
            let product = result.groups.product
            let count = result.groups.count
            let price = result.groups.price
            let money = count * price
            total += money
            console.log(`${name}: ${product} - ${money.toFixed(2)}`)
        } else if (line === 'end of shift') {
            console.log(`Total income: ${total.toFixed(2)}`)
            break;
        }
    }
}
solve(['%George%<Croissant>|2|10.3$',
    '%Peter%<Gum>|1|1.3$',
    '%Maria%<Cola>|1|2.4$',
    'end of shift'])
console.log("----------------------------------------")
solve(['%InvalidName%<Croissant>|2|10.3$',
    '%Peter%<Gum>1.3$',
    '%Maria%<Cola>|1|2.4',
    '%Valid%<Valid>valid|10|valid20$',
    'end of shift'])