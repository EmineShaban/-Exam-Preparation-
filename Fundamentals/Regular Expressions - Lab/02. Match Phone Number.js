function solve(arr) {
    // let text = arr[0]
    let pattern = /(\+359)([ -])(2)\2\d{3}\2\d{4}\b/g
    let result = []
    while ((match = pattern.exec(arr)) !== null) {
        result.push(match[0])
        // match = pattern.exec(text)
    }
    console.log(result.join(", "))
}
// function solve(input) {

//     let text=input[0]
//     let pattern = /(?:\s|^)\+359( |,)2\1\d{3}\1\d{4}\b/g
//     let result = []
//     let match = pattern.exec(text)
//     while (match !== null) {

//         result.push(match[0])

//         match = pattern.exec(text)
//     }
//      console.log(result.join(', '));
// }
solve("+359 2 222 2222,359-2-222-2222, +359/2/222/2222, +359-2 222 2222 +359 2-222-2222, +359-2-222-222, +359-2-222-22222 +359-2-222-2222")