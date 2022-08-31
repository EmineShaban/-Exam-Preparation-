function solve() {
    let name = document.getElementById('recipientName')
    let title = document.getElementById('title')
    let message = document.getElementById('message')
    let addBtn = document.getElementById('add')
    let resetBtn = document.getElementById('reset')
    let ul1 = document.querySelector('.sent-list')
    let ul = document.getElementById('list')
    let ul3 = document.querySelector('.delete-list')
    

    addBtn.addEventListener('click', onAdd)
    resetBtn.addEventListener('click', onReset)


    function onReset(event) {
        event.preventDefault()
        name.value = ''
        title.value = ''
        message.value = ''
    }



    function onAdd(event) {
        event.preventDefault()

        if (name.value === '' || title.value === '' || message.value === "") {
            return
        }


        
        
        let h41 = document.createElement('h4')
        let h42 = document.createElement('h4')
        let span = document.createElement('span')
        
        
        h41.textContent = `Title: ${title.value}`
        h42.textContent = `Recipient Name: ${name.value}`
        span.textContent = message.value

        // let name1 = h41.textContent
        // let title1 = h42.textContent

        let div = document.createElement('div')
        div.id = 'list-action'

        let sendBtn = document.createElement('button')
        let deleteBtn = document.createElement('button')

        sendBtn.textContent = 'Send'
        deleteBtn.textContent = 'Delete'
        sendBtn.id = 'send'
        deleteBtn.id = 'delete'
        sendBtn.type = 'submit'
        deleteBtn.type = 'submit'

        name.value = ''
        title.value = ''
        message.value = ''

        div.appendChild(sendBtn)
        div.appendChild(deleteBtn)
        let lii = document.createElement('li')
        lii.appendChild(h41)
        lii.appendChild(h42)
        lii.appendChild(span)
        lii.appendChild(div)   
        ul.appendChild(lii)
        deleteBtn.addEventListener('click', ooo)

        sendBtn.addEventListener('click', function onCLick(e){
            e.preventDefault()

            let parent = e.target.parentElement
            
            let span1 = document.createElement('span')
            let span2 = document.createElement('span')
            
            let div = document.createElement('div')
            div.classList = 'btn'
            
            let deleteBtn = document.createElement('button')
            deleteBtn.textContent = 'Delete'
            deleteBtn.type = 'submit'
            deleteBtn.classList = 'delete'
            
            div.appendChild(deleteBtn)
            
            span1.textContent = `To: ${name.value}`
            span2.textContent = `Title: ${title.value}`
            
            h41.textContent = ''
            h42.textContent = ''
            span.textContent = ''
            
            ul1.appendChild(span1)
            ul1.appendChild(span2)
            ul1.appendChild(div)
            parent.removeChild(parent.lastChild)
            parent.removeChild(parent.lastChild)

            deleteBtn.addEventListener('click', ooo)
            function ooo(e){
                e.preventDefault()
                let parent = e.target.parentElement
                
                let span11 = document.createElement('span')
                let span22 = document.createElement('span')  
                span11.textContent = `To: ${name.value}`
                span22.textContent = `Title: ${title.value}`
                let ul3 = document.querySelector('.delete-list')
   
                span2.textContent = ''
                span1.textContent = ''
                ul3.appendChild(span11)
                ul3.appendChild(span22)
                
                parent.remove()
                // parent.removeChild(parent.lastChild)
                // parent.removeChild(parent.lastChild)
        
            }
        })
        function ooo(e){
            e.preventDefault()
            let parent = e.target.parentElement
            
            let span11 = document.createElement('span')
            let span22 = document.createElement('span')  
            span11.textContent = `To: ${name.value}`
            span22.textContent = `Title: ${title.value}`
            let ul3 = document.querySelector('.delete-list')
            // span11.textContent =''
            // span22.textContent = ''
            h41.textContent = ''
            h42.textContent = ''
            span.textContent = ''
            
            ul3.appendChild(span11)
            ul3.appendChild(span22)
            
            parent.remove()
            // parent.removeChild(parent.lastChild)
            // parent.removeChild(parent.lastChild)
    
        }
    }
}
solve()