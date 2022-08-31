function notify(message) {
  let button = document.getElementById('notification')
  button.innerText = message
  button.style.display = 'block'
  button.addEventListener('click', onClick)
  function onClick(){
    button.style.display = 'none'
  }
}