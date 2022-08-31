function create(words) {
   let result = document.getElementById('content')
   for (const word of words) {
      let div = document.createElement('div')
      let p = document.createElement('p')
      p.textContent = word
      p.style.display = 'none'
      div.addEventListener('click', onClick)
      function onClick(e){

         // e.currentTarget.
         p.style.display = ''
      }
      div.appendChild(p)
      result.appendChild(div)
   }
}