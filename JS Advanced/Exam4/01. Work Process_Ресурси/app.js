function solve() {
    let fname = document.getElementById('fname')
    let lname = document.getElementById('lname')
    let email = document.getElementById('email')
    let birth = document.getElementById('birth')
    let position = document.getElementById('position')
    let salary = document.getElementById('salary')
    let addWorker = document.getElementById('add-worker')
    let tbody = document.getElementById('tbody')
    let message = document.getElementById('message')
    let sum = document.getElementById('sum')
    // fname.textContent = 'aaaa'
    addWorker.addEventListener('click', onClick)
    function onClick(event) {
        event.preventDefault()
        if (fname === '' || lname === '' || email === '' || birth === '' || position === '' || salary === '') {
            return
        }
        let tr = document.createElement('tr')
        let td1 = document.createElement('td')
        let td2 = document.createElement('td')
        let td3 = document.createElement('td')
        let td4 = document.createElement('td')
        let td5 = document.createElement('td')
        let td6 = document.createElement('td')
        let firedBtn = document.createElement('button')
        let editBtn = document.createElement('button')

        td1.textContent = fname.value
        td2.textContent = lname.value
        td3.textContent = email.value
        td4.textContent = birth.value
        td5.textContent = position.value
        td6.textContent = salary.value
        firedBtn.textContent = 'Fired'
        editBtn.textContent = 'Edit'
        firedBtn.classList = 'fired'
        editBtn.classList = 'edit'

        tr.appendChild(td1)
        tr.appendChild(td2)
        tr.appendChild(td3)
        tr.appendChild(td4)
        tr.appendChild(td5)
        tr.appendChild(td5)
        tr.appendChild(firedBtn)
        tr.appendChild(editBtn)

        tbody.appendChild(tr)

        fname.value = ''
        lname.value = ''
        email.value = ''
        birth.value = ''
        position.value = ''
        salary.value = ''

        let currentSullary = Number(sum.textContent)
        sum.textContent = (currentSullary + Number(td6.textContent)).toFixed(2)
        firedBtn.addEventListener('click', fired)
        function fired(e){
            e.preventDefault();
            e.target.parentNode.remove();
            sum.textContent = (sum.textContent - Number(td6.textContent)).toFixed(2)
        }
        editBtn.addEventListener('click', edit)
        function edit(e){
            e.preventDefault();
            fname.value = td1.textContent
            lname.value = td2.textContent
            email.value = td3.textContent
            birth.value = td4.textContent
            position.value = td5.textContent
            salary.value = td6.textContent
            e.target.parentNode.remove();
            sum.textContent = (sum.textContent - Number(td6.textContent)).toFixed(2)
        }
    

    }

}
solve()