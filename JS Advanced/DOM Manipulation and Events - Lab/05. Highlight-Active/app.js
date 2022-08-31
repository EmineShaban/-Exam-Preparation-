function focused() {
    let section = Array.from(document.getElementsByTagName('input'))
    for (const sec of section) {
        sec.addEventListener('focus', onFocus)
        sec.addEventListener('blur', onBlur)
    }
    function onFocus(ev) {
        ev.target.parentNode.className = focused
    }
    function onBlur(ev) {
        ev.target.parentNode.className = ''
    }
}