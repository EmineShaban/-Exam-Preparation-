function deleteByEmail() {
    let input = document.querySelector('input[name="email"]')
    let email = document.querySelectorAll('tr td:nth-of-type(2)')
    let result = document.getElementById('result')

    let emailsElement = Array.from(email)
    let targetElements = emailsElement.find(x => x.textContent == input.value)

    if(targetElements){
        targetElements.parentNode.remove()
        result.textContent = 'Deleted.'

    }else{
        result.textContent = 'Not found.'
    }
}
