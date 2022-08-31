window.addEventListener("load", solve);

function solve() {
let title = document.querySelector("#post-title")
let category = document.getElementById("post-category")
let content = document.querySelector('#post-content')
let publishBtn = document.getElementById('publish-btn')
let reviewList = document.getElementById('review-list')
let publishedList = document.getElementById('published-list')
let clearBtn = document.getElementById('clear-btn')

publishBtn.addEventListener('click', review)
function review(){
  if(title.value === '' || category.value === '' || content.value === ''){
    return
  }
  let li =  document.createElement('li')
  li.classList.add('rpost')
  let article =  document.createElement('article')

  let h4 = document.createElement('h4')
  h4.textContent = title.value
  let p1 =  document.createElement('p')
  p1.textContent = `Category: ${category.value}`
  let p2 =  document.createElement('p')
  p2.textContent = `Content: ${content.value}`
  
  let btnEdit =  document.createElement('button')
  let btnApprove =  document.createElement('button')
  btnEdit.classList.add('action-btn')
  btnEdit.classList.add('edit')
  btnEdit.textContent = 'Edit'
  btnApprove.classList.add('action-btn')
  btnApprove.classList.add('approve')
  btnApprove.textContent = 'Approve'

  article.appendChild(h4)
  article.appendChild(p1)
  article.appendChild(p2)
  
  li.appendChild(article)
  li.appendChild(btnEdit)
  li.appendChild(btnApprove)
  reviewList.appendChild(li)
btnEdit.addEventListener('click', function onEdit(e){
  let parent = e.target.parentElement
  title.value = h4.textContent
  category.value = p1.textContent.split(': ')[1]
  content.value = p2.textContent.split(': ')[1]
  parent.remove()
})
btnApprove.addEventListener('click', function onApprove(e){
  let parent = e.target.parentElement
  parent.removeChild(parent.lastChild)
  parent.removeChild(parent.lastChild)
  publishedList.appendChild(parent)
})
  title.value = ''
  category.value = ''
  content.value = ''
}
clearBtn.addEventListener('click', function onClear(e){
Array.from(publishedList.children).forEach(e => e.remove())
})
}