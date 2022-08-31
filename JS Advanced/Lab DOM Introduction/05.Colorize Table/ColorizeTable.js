function colorize() {
    // TODO
    // let rowElements = document.querySelectorAll('tr:nth-of-type(2n) td')
    // rowElements.forEach(element => {
    //     element.style.backgroundColor = 'teal'
    // });
    let rowElements = document.getElementsByTagName('tr')
    let rows = Array.from(rowElements)
        rows.forEach((el, i) => {
            if(i % 2 != 0){
                el.style.backgroundColor = 'teal'

            }

        })

}