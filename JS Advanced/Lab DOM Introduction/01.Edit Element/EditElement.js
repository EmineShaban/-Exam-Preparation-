function editElement(el, match, replacer) {
    // TODO
    while(el.textContent.includes(match)){

        el.textContent = el.textContent.replace(match, replacer)
    }
}