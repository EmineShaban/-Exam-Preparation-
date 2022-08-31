function solve(arr) {
    let text = []
    let currWord = arr[0]
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] !== arr[i].toUpperCase()) {
            currWord = currWord.concat(arr[i])
        } else {
            text.push(currWord)
            currWord = arr[i]
        }
    }
    text.push(currWord)
    console.log(text.join(", "))


}
solve('SplitMeIfYouCanHaHaYouCantOrYouCan')
solve('HoldTheDoor')