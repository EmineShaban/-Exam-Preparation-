function addItem() {
    let input = document.getElementById('newItemText')
    let rows = document.getElementById('items')
    let neww = document.createElement('li')
    neww.textContent = input.value
    rows.appendChild(neww)
}