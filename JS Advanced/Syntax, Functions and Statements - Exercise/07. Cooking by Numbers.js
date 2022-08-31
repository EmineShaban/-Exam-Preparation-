function solve(num, command1, command2, command3, command4, command5) {

    let arr = [command1, command2, command3, command4, command5]
    console.log(arr)
    for (let i = 0; i < arr.length; i++) {
        let command = arr[i]
        if (command === 'chop') {
            num /= 2
            console.log(num)
        } else if (command === 'dice') {
            num = Math.sqrt(num)
            console.log(num)
        } else if (command === 'spice') {
            num += 1
            console.log(num)
        } else if (command === 'bake') {
            num *= 3
            console.log(num)
        } else if (command === 'fillet') {
            num *= 0.80
            console.log(num.toFixed(1))
        }
    }
}
solve('32', 'chop', 'chop', 'chop', 'chop', 'chop')
console.log("------")
solve('9', 'dice', 'spice', 'chop', 'bake', 'fillet')