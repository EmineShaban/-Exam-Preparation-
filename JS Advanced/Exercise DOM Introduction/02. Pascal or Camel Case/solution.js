function solve() {
  let input = document.getElementById('text').value
  let casee = document.getElementById('naming-convention').value
  let output = ''
  if (casee === 'Camel Case') {
    for (let i = 0; i < input.length; i++) {
      if (input[i] === ' ') {
        output += (input[i + 1].toUpperCase())
        i++
      } else {
        output += ((input[i]).toLowerCase())
      }
    }
  } else if (casee === 'Pascal Case') {
    output += (input[0].toUpperCase())
    for (let i = 1; i < input.length; i++) {
      if (input[i] === ' ') {
        output += (input[i + 1].toUpperCase())
        i++
      } else {
        output += ((input[i]).toLowerCase())
      }
    }
  } else {
    output = "Error!"
  }
  console.log(input)
  let res = document.getElementById('result')
  res.textContent = output
}
// tIIAEME
// "this is an example", Camel Case
// thisIsAnExample
// "secOND eXamPLE", "Pascal Case"
// SecondExample