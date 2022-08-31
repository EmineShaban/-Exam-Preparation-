window.addEventListener('load', solve);

function solve() {

    let typeProduct = document.getElementById(`type-product`)
    let description = document.getElementById(`description`)
    let clientName = document.getElementById(`client-name`)
    let clientPhone = document.getElementById(`client-phone`)
    let sendForm = document.querySelector('button')
    let receivedOrders = document.getElementById('received-orders')
    let completedOrders = document.getElementById('completed-orders')
    sendForm.addEventListener('click', onClick)

    function onClick(e) {
        e.preventDefault()
        if (clientName.value === '' || description.value === '' || clientPhone.value === '') {
            return
        }

        let product = typeProduct.value

        let div = document.createElement('div')
        div.classList = 'container'

        let h2 = document.createElement('h2')
        let h3 = document.createElement('h3')
        let h4 = document.createElement('h4')
        
        let h2text = `Product type for repair: ${product}`
        let h3text = `Client information: ${clientName.value}, ${clientPhone.value}`
        let h4text = `Description of the problem: ${description.value}`
        h2.textContent = `Product type for repair: ${product}`
        h3.textContent = `Client information: ${clientName.value}, ${clientPhone.value}`
        h4.textContent = `Description of the problem: ${description.value}`
        div.appendChild(h2)
        div.appendChild(h3)
        div.appendChild(h4)

        let startBtn = document.createElement('button')
        let finishBtn = document.createElement('button')
        startBtn.classList = 'start-btn'
        finishBtn.classList = 'finish-btn'
        startBtn.textContent = 'Start repair'
        finishBtn.textContent = 'Finish repair'
        div.appendChild(startBtn)
        div.appendChild(finishBtn)
        receivedOrders.appendChild(div)
        finishBtn.disabled = true
        
        typeProduct.value = ''
        description.value = ''
        clientName.value = ''
        clientPhone.value = ''
        
        startBtn.addEventListener('click', start)
        finishBtn.addEventListener('click', finish)
        
        function start(e) {
            e.preventDefault()
            finishBtn.disabled = false
            startBtn.disabled = true
            
        }
        function finish(e) {
            e.preventDefault()
            let div2 = document.createElement('div')
            div2.classList = 'container'
            
            let h22 = document.createElement('h2')
            let h33 = document.createElement('h3')
            let h44 = document.createElement('h4')
            
            h22.textContent = h2text
            h33.textContent = h3text
            h44.textContent = h4text
            
            div2.appendChild(h22)
            div2.appendChild(h33)
            div2.appendChild(h44)
            
            completedOrders.appendChild(div2)
            e.target.parentNode.remove();
            let clearBtn = document.querySelector('.clear-btn')
            clearBtn.addEventListener('click', clear)
            function clear(e){
                e.preventDefault()
                // console.log('aaaaa')
                e.target.parentNode.remove();

            }
        }

    }




}