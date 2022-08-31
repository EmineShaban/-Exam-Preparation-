function lockedProfile() {
    let buttons = Array.from(document.querySelectorAll('button'))
    // let dis = document.querySelectorAll('input["type=radio"]')
    // console.log()
    // let display1 = document.getElementById('user1HiddenFields')
    for (const button of buttons) {
        button.addEventListener('click', onClick)

    }
    function onClick(e) {

        let profile = e.target.parentElement
        // console.log(profile)
        let isActiv = profile.querySelector('input[type="radio"][value="unlock"]').checked
        if (isActiv) {
            let divv = profile.querySelector('div')
            if (e.target.textContent === 'Show more') {
                e.target.textContent = 'Hide it'
                divv.style.display = 'block'
            } else {
                e.target.textContent = 'Show more'
                divv.style.display = ''

            }
        }
    }
}