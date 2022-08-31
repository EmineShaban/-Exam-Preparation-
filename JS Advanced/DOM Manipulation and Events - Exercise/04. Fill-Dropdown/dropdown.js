function addItem() {
    let newText = document.getElementById('newItemText').value
    let newValue1 = document.getElementById('newItemValue').value

    let options = document.createElement('option')
    options.text = newText
    options.value = newValue1

    let menu = document.getElementById('menu')

    if(newText != '' && newText != ''){
        menu.appendChild(options)
    }
    document.getElementById('newItemText').value = ''
    document.getElementById('newItemValue').value = ''
}