function solve(arr, first, last) {
    let f = arr.indexOf(first)
    let l = arr.indexOf(last)
    let result = arr.slice(f, l + 1)
    return result
    // console.log(result.join(', '))

}
solve(['Pumpkin Pie',
    'Key Lime Pie',
    'Cherry Pie',
    'Lemon Meringue Pie',
    'Sugar Cream Pie'],
    'Key Lime Pie',
    'Lemon Meringue Pie')
console.log("------")
solve(['Apple Crisp',
    'Mississippi Mud Pie',
    'Pot Pie',
    'Steak and Cheese Pie',
    'Butter Chicken Pie',
    'Smoked Fish Pie'],
    'Pot Pie',
    'Smoked Fish Pie')