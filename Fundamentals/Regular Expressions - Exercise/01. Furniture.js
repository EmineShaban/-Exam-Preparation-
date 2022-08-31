function solve(arr) {
    let totalSum = 0
    console.log("Bought furniture:")
    for (let line of arr) {
        if (line === 'Purchase') {
            break;
        }
        let pattern = />>(?<name>[A-Z][A-Z]?[a-z]*)<<(?<price>\d+(.\d*)?)!(?<quantity>\d*)/g
        let result = pattern.exec(line)
        if (result !== null) {
            let name = result.groups.name
            let price = Number(result.groups.price)
            let quantity = Number(result.groups.quantity)
            totalSum += price * quantity
            console.log(name)
        }
    }
    console.log(`Total money spend: ${totalSum.toFixed(2)}`)

}
solve(['>>Sofa<<312.23!3',
    '>>TV<<300!5',
    '>Invalid<<!5',
    'Purchase'])
    console.log("----------------------")
solve(['>>Laptop<<312.2323!3',
    '>>TV<<300.21314!5',
    '>Invalid<<!5',
    '>>TV<<300.21314!20',
    '>>Invalid<!5',
    '>>TV<<30.21314!5',
    '>>Invalid<<!!5',
    'Purchase'])