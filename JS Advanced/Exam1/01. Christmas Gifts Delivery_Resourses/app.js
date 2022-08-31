function solution() {
    let addGiftsButton = document.querySelector('.card button')
    let input = document.querySelector('input')
    let [gift, sended, discarded] = document.querySelectorAll('section ul')


    addGiftsButton.addEventListener('click', addGifts)
    function addGifts() {
        let name = input.value
        input.value = ''
        let element = e('li', name, 'gift')
        let sendBtn = e('button', 'Send', 'sendButton')
        let discardBtn = e('button', 'Discard', 'discardButton')

        sendBtn.id = 'sendButton'
        discardBtn.id = 'discardButton'
        element.appendChild(sendBtn)
        element.appendChild(discardBtn)
        gift.appendChild(element)
        sendBtn.addEventListener('click', () => sendGifts(name, element))
        discardBtn.addEventListener('click', () => discardGifts(name, element))

        soreGifts()
    }
    function sendGifts(name, gift) {
        gift.remove()
        let element = e('li', name, 'gift')
        sended.appendChild(element)
    }
    function discardGifts(name, gift) {
        gift.remove()
        let element = e('li', name, 'gift')
        discarded.appendChild(element)
    }
    function soreGifts() {
        Array.from(gift.children).sort((a, b) => a.childNodes[0].textContent.localeCompare(b.childNodes[0].textContent)).forEach(g => gift.appendChild(g))
    }
    function e(type, content, classNamee) {
        let result = document.createElement(type)
        result.textContent = content
        if (classNamee) {
            result.className = classNamee
        }
        return result
    }
    //         let newElement = document.createElement('li')
    //         newElement.className = 'gift'
    //         // let so = document.querySelectorAll('#gift')
    //         // let arr = Array.from(so)
    //         // console.log(arr)
    //         gift.appendChild(newElement)
    //         // Array.from(gift).sort()
    //         newElement.append(name)
    //         let arrSorted = []
    //         arrSorted.push(newElement.textContent)
    //         arrSorted.sort((a, b) => a.localeCompare(b))
    //         console.log(arrSorted)
    //         // let sorted = newElement.value
    // // console.log(newElement.textContent)


    //         let sendButton = document.createElement('button')
    //         sendButton.textContent = 'Send'
    //         sendButton.classList.add('sendButton')
    //         newElement.append(sendButton)
    //         let discardButton = document.createElement('button')
    //         discardButton.textContent = 'Discard'
    //         discardButton.classList.add('discardButton')
    //         newElement.append(discardButton)
    //         sendButton.addEventListener('click', send => {
    //             // let newElement = liClass.textContent
    //             let newLi = document.createElement('li')
    //             // newLi.appendChild(name)
    //             // newLi.textContent = name.value
    //             sended.appendChild(newLi)
    //             newLi.append(name)
    //             newElement.remove()
    //             // console.log(newLi)
    //         })
    //         discardButton.addEventListener('click', send => {
    //             // let newElement = liClass.textContent
    //             let newLi = document.createElement('li')
    //             // newLi.appendChild(name)
    //             // newLi.textContent = name.value
    //             discarded.appendChild(newLi)
    //             newLi.append(name)
    //             newElement.remove()
    //             // console.log(newLi)
    //         })

    //     // console.log()
    // }   
}