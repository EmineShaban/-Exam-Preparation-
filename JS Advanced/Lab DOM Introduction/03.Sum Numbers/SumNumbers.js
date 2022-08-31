function calc() {
    // TODO: sum = num1 + num2
    let numm1 = document.getElementById('num1')
    let numm2 = document.getElementById('num2')
    let num1 = Number(numm1.value)
    let num2 = Number(numm2.value)
    let result = num1 + num2
    let res = document.getElementById('sum')
    res.value = result
}
