window.addEventListener("load", solve);

function solve() {
//   let make = document.getElementById('make')
// let model = document.getElementById('model')
// let year = document.getElementById('year')
// let fuel = document.getElementById('fuel')
// let originalCost = document.getElementById('original-cost')
// let sellingPrice = document.getElementById('selling-price')
// let publishBtn = document.getElementById('publish')
// // let tableBody = document.getElementById('table-body')
// // let carsList = document.getElementById('cars-list')
// publishBtn.addEventListener('click', onClick)

// function onClick(e){






  let make = document.getElementById('make')
  let model = document.getElementById('model')
  let year = document.getElementById('year')
  let fuel = document.getElementById('fuel')
  let originalCost = document.getElementById('original-cost')
  let sellingPrice = document.getElementById('selling-price')
  let publishBtn = document.getElementById('publish')
  let tableBody = document.getElementById('table-body')
  let carsList = document.getElementById('cars-list')
  
  publishBtn.addEventListener('click', publish)
  function publish(e) {
    e.preventDefault()
    if (make.value === '' || model.value === '' || year.value === '' || fuel.value === '' || originalCost.value === '' || sellingPrice.value == '' ||originalCost.value< 0||sellingPrice.value<0||  originalCost.value > sellingPrice.value) {
      return
    }
  
    let tr = document.createElement('tr')
    tr.classList = 'row'
  
    let tdMake = document.createElement('td')
    let tdModel = document.createElement('td')
    let tdYear = document.createElement('td')
    let tdFuel = document.createElement('td')
    let tdOriginCost = document.createElement('td')
    let tdSellPrice = document.createElement('td')
  
    
    tdMake.textContent = make.value
    tdModel.textContent = model.value
    tdYear.textContent = year.value
    tdFuel.textContent = fuel.value
    tdOriginCost.textContent = originalCost.value
    tdSellPrice.textContent = sellingPrice.value
    
    // let make1 = tdMake.textContent
    // console.log(make1)
    // let model1 = model.value
    // let year1 = year.value
    // let diff = Number(sellingPrice.value) - Number(originalCost.value)
  
    let tdBtn = document.createElement('td')
    let actionBtnEdit = document.createElement('button')
    let actionBtnSell = document.createElement('button')
    actionBtnEdit.classList = 'action-btn edit'
    actionBtnSell.classList = 'action-btn sell'
    actionBtnEdit.textContent = 'Edit'
    actionBtnSell.textContent = 'Sell'
    tdBtn.appendChild(actionBtnEdit)
    tdBtn.appendChild(actionBtnSell)
  
    tr.appendChild(tdMake)
    tr.appendChild(tdModel)
    tr.appendChild(tdYear)
    tr.appendChild(tdFuel)
    tr.appendChild(tdOriginCost)
    tr.appendChild(tdSellPrice)
    tr.appendChild(tdBtn)
  
  
    tableBody.appendChild(tr)
  
    make.value = ''
    model.value = ''
    year.value = ''
    fuel.value = ''
    originalCost.value = ''
    sellingPrice.value = ''
  
    actionBtnEdit.addEventListener('click', edit)
    actionBtnSell.addEventListener('click', sell)
  
  
    function edit(e) {
      e.preventDefault()
      // let parent = e.target.parentElement
  
      make.value = tdMake.textContent
      model.value = tdModel.textContent
      year.value = tdYear.textContent
      fuel.value = tdFuel.textContent
      originalCost.value = tdOriginCost.textContent
      sellingPrice.value = tdSellPrice.textContent
      // parent.parentNode.remove();
      e.target.parentNode.parentNode.remove();

    }
  
    function sell(e) {
      e.preventDefault()
      // let parent = e.target.parentElement
  
      let li = document.createElement('li')
      li.classList = 'each-list'
      let span1 = document.createElement('span')
      let span2 = document.createElement('span')
      let span3 = document.createElement('span')
      // let el = `${make.value} ${model.value}`
      // console.log(make1)
      span1.textContent = `${tdMake.textContent} ${tdModel.textContent}`
      span2.textContent = tdYear.textContent
      span3.textContent = `${tdSellPrice.textContent - tdOriginCost.textContent}`
      li.appendChild(span1)
      li.appendChild(span2)
      li.appendChild(span3)
      carsList.appendChild(li)
  
      let totalPriceElement = document.getElementById('profit')
      let totalPrice = Number(totalPriceElement.textContent)
      let pr = Number(span3.textContent)
      totalPrice += pr
      totalPriceElement.textContent = totalPrice.toFixed(2)
      totalPriceElement.style.display = 'strong'
      e.target.parentNode.parentNode.remove();
    }
  }




//   e.target.parentNode.parentNode.remove();

// }


}
