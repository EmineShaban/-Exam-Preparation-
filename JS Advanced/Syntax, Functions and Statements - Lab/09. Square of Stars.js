function solve(num) {
    let arr = []
    if (num >= 1) {
        for (let i = 1; i <= num; i++) {
            for (let index = 1; index <= num; index++) {
                arr.push("*")
            }
            console.log(arr.join(' '))
            arr = []
        }
    } else {
        for (let i = 1; i <= 5; i++) {
            for (let index = 1; index <= 5; index++) {
                arr.push("*")
            }
            console.log(arr.join(' '))
            arr = []
        }
    }

}