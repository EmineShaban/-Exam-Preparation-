function solve(arr) {
    let top = []
    for (let i = 0; i < arr.length; i++) {
        let num = arr[i]
        let isTop = true
        for (let k = i + 1; k < arr.length; k++) {
            let num2 = arr[k]
            if (num <= num2) {
                isTop = false
                break;
            }
        }
        if (isTop){
            top.push(num)
        }
    }
console.log(top.join(" "))
}