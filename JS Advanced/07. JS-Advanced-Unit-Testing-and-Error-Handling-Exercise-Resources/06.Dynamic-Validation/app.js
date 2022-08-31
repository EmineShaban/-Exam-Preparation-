function validate() {
    document.getElementById('email').addEventListener('change', onClick)
    function onClick(event) {
        let pattern = /[a-z]+@[a-z]+.[a-z]/gm

        if (pattern.test(event.target.value)) {
            event.target.classList.remove('error')
        } else {
            event.target.classList.add('error')

        }


    }
}