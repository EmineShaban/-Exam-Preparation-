function solve() {
  let input = document.getElementById('input').value
  let output = document.getElementById('output')
  let text = input.split('.').filter(a => a != "")

  while (text.length > 0) {
    let paragraf = text.splice(0, 3).join('. ') + '.'
    let p = document.createElement('p')
    p.textContent = paragraf
    output.appendChild(p)
  }

} 