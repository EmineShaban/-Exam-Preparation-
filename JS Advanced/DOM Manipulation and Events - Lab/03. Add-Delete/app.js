function addItem() {
    let input = document.getElementById('newItemText')
    let rows = document.getElementById('items')
    let liElement = document.createElement('li')
    liElement.textContent = input.value

    input.value = ''

    let deleteElement = document.createElement('a')
    deleteElement.href = "#"
    deleteElement.textContent = '[Delete]'
    deleteElement.addEventListener('click', (e) =>{
        e.currentTarget.parentElement.remove()
    })





    liElement.appendChild(deleteElement)
    rows.appendChild(liElement)


}