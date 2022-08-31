function subtract() {
    let number1 = document.getElementById('firstNumber').value
    let number2 = document.getElementById('secondNumber').value
    let result = document.getElementById('result')
    let num1 = Number(number1)
    let num2 = Number(number2)
    let sum = num1 - num2
    result.textContent = sum
    console.log(result);
}