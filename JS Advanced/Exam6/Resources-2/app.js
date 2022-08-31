window.addEventListener('load', solve);

function solve() {
    let genre = document.getElementById('genre')
    let name = document.getElementById('name')
    let author = document.getElementById('author')
    let date = document.getElementById('date')
    let addBtn = document.getElementById('add-btn')
    let allHitsContainer = document.querySelector('.all-hits-container')
    let savedContainer = document.querySelector('.saved-container')
    addBtn.addEventListener('click', add)
    function add(e) {
        e.preventDefault()
        if (genre.value === '' || name.value === '' || author.value === '' || date.value === '') {
            return
        }
        let div = document.createElement('div')
        div.classList = 'hits-info'

        let h2 = document.createElement('h2')
        let h22 = document.createElement('h2')
        let h222 = document.createElement('h2')
        let h3 = document.createElement('h3')

        let h1 = `Genre: ${genre.value}`
        let h11 = `Name: ${name.value}`
        let h111 = `Author: ${author.value}`
        let h1111 = `Date: ${date.value}`

        h2.textContent = `Genre: ${genre.value}`
        h22.textContent = `Name: ${name.value}`
        h222.textContent = `Author: ${author.value}`
        h3.textContent = `Date: ${date.value}`

        let saveBtn = document.createElement('button')
        let likeBtn = document.createElement('button')
        let deleteBtn = document.createElement('button')
        saveBtn.classList = 'save-btn'
        likeBtn.classList = 'like-btn'
        deleteBtn.classList = 'delete-btn'
        saveBtn.textContent = 'Save song'
        likeBtn.textContent = 'Like song'
        deleteBtn.textContent = 'Delete'

        let img = document.createElement('img')
        img.src = './static/img/img.png'

        div.appendChild(img)
        div.appendChild(h2)
        div.appendChild(h22)
        div.appendChild(h222)
        div.appendChild(h3)
        div.appendChild(saveBtn)
        div.appendChild(likeBtn)
        div.appendChild(deleteBtn)
        allHitsContainer.appendChild(div)

        genre.value = ''
        name.value = ''
        author.value = ''
        date.value = ''
        deleteBtn.addEventListener('click', remove1)

        function remove1(e){
            e.preventDefault()
            e.target.parentNode.remove();

        }
        likeBtn.addEventListener('click', like)
        function like(e) {
            e.preventDefault()
            likeBtn.disabled = true
            let cl = document.querySelector('.likes p')
            let numOfLikes = Number(cl.textContent.split(': ')[1])
            numOfLikes += 1
            cl.textContent = `Total Likes: ${numOfLikes}`
            // console.log(cl.textContent.split(': ')[1])  
        }
        saveBtn.addEventListener('click', save)
        function save(e) {
            e.preventDefault()
            let h3 = document.createElement('h2')
            let h33 = document.createElement('h2')
            let h333 = document.createElement('h2')
            let h3333 = document.createElement('h3')
            h3.textContent = h1
            h33.textContent = h11
            h333.textContent = h111
            h3333.textContent = h1111
            let div3 = document.createElement('div')
            div3.classList = 'hits-info'
            let img = document.createElement('img')
            img.src = './static/img/img.png'
            let delBtn = document.createElement('button')
            delBtn.classList = 'delete-btn'
            delBtn.textContent = 'Delete'
            div3.appendChild(img)
            div3.appendChild(h3)
            div3.appendChild(h33)
            div3.appendChild(h333)
            div3.appendChild(h3333)
            div3.appendChild(delBtn)
            savedContainer.appendChild(div3)
            e.target.parentNode.remove();
            delBtn.addEventListener('click', remove)
            function remove(e){
                e.preventDefault()
                e.target.parentNode.remove();

            }
        }
    }




}