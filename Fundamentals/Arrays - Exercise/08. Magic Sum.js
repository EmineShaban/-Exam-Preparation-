function solve(arr, magSum) {
    for (let i = 0; i < arr.length - 1; i++) {
        let num = arr[i]
        for (let k = i + 1; k < arr.length; k++) {
            let num2 = arr[k]
            let sum = num + num2
            if (sum === magSum) {
                console.log(`${num} ${num2}`)
            }
        }
    }
}