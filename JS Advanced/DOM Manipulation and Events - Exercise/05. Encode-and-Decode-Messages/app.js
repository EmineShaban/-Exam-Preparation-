function encodeAndDecodeMessages() {
    let buttons = document.querySelectorAll('button')
    let sendLetter = buttons[0]
    let readLetter = buttons[1]
    sendLetter.addEventListener('click', send)
    readLetter.addEventListener('click', read)
    let smska = document.querySelectorAll('textarea')
    function send(e){
        let newArr =[]
        let received = smska[1]
        let profile = e.target.parentElement
        let sms = profile.querySelector('textarea')
        let arr = []
        let text = sms.value
        for (let i = 0; i<text.length; i++) {
            let char = text[i].charCodeAt()+1
            newArr.push(String.fromCharCode(char))
        }
        received.value = newArr.join('')
        sms.value = ''
    }
    function read(e){
        let profile = e.target.parentElement
        let sms = profile.querySelector('textarea')
        let text = sms.value
        let arr = []
        for (let i = 0; i<text.length; i++) {
            let char = text[i].charCodeAt()-1
            arr.push(String.fromCharCode(char))
            
        }
        sms.value = arr.join('')
    }
}