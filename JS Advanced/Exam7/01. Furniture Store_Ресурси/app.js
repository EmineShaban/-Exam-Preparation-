window.addEventListener('load', solve);

function solve() {
    let model = document.getElementById('model')
    let year = document.getElementById('year')
    let description = document.getElementById('description')
    let price = document.getElementById('price')
    let addBtn = document.getElementById('add')
    let furnitureList = document.getElementById('furniture-list')
    addBtn.addEventListener('click', add)
    function add(e) {
        e.preventDefault()

        if (model.value === '' || description.value === '' || year.value === "" || price.value === '' || year.value < 0 || price.value < 0) {
            return
        }

        let tr1 = document.createElement('tr')
        tr1.classList = 'info'

        let td1 = document.createElement('td')
        let td2 = document.createElement('td')

        td1.textContent = model.value
        let priceNum = Number(price.value).toFixed(2)
        td2.textContent = priceNum

        tr1.appendChild(td1)
        tr1.appendChild(td2)

        let td3 = document.createElement('td')
        let moreBtn = document.createElement('button')
        let buyBtn = document.createElement('button')

        moreBtn.textContent = `More Info`
        buyBtn.textContent = `Buy it`
        moreBtn.classList = 'moreBtn'
        buyBtn.classList = 'buyBtn'

        td3.appendChild(moreBtn)
        td3.appendChild(buyBtn)
        tr1.appendChild(td3)
        let tr2 = document.createElement('tr')
        tr2.classList = 'hide'
        let td4 = document.createElement('td')
        let td5 = document.createElement('td')
        td4.textContent = `Year ${year.value}`
        td5.textContent = `Description: ${description.value}`
        td5.setAttribute('colspan', 3)
        tr2.appendChild(td4)
        tr2.appendChild(td5)
        furnitureList.appendChild(tr1)
        furnitureList.appendChild(tr2)    
        moreBtn.addEventListener('click', moreInfo)
        function moreInfo(e){
            if(moreBtn.textContent === 'More Info'){
                moreBtn.textContent = 'Less Info'
                tr2.style.display = 'contents'
            }else{
                moreBtn.textContent = 'More Info'
                tr2.style.display = 'none'
            }
        }
        buyBtn.addEventListener('click', buy)
        function buy(e){
            let totalPriceElement = document.querySelector('.total-price')
            let totalPrice = Number(totalPriceElement.textContent)
            let pr = Number(price.value)
            totalPrice += pr
            totalPriceElement.textContent = totalPrice.toFixed(2)
            tr1.remove()
            tr2.remove()
        }
    }
}
