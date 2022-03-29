function solve(input) {
    let regexWord = /([:*])\1(?<name>[A-Z][a-z]{2,})\1\1/g
    let result = []
    let count = 0
    let num = /\d/g
    let text = input[0]
    let numbers = num.exec(text)
    let pattern = regexWord.exec(text)
    let coolNum = 1
    let res = ''
    while (numbers != null) {
        coolNum *= Number(numbers[0])
        numbers = num.exec(text)
    }
    console.log(`Cool threshold: ${coolNum}`)
    while (null != pattern) {
        count++
        res = pattern[0]
        let word = pattern.groups.name
        let sumOfWords = 0
        for (let char of word) {
            let num = char.charCodeAt()
            sumOfWords += num
        }
        if (sumOfWords > coolNum) {
            result.push(res)
        }

        pattern = regexWord.exec(text)
    }
        console.log(`${count} emojis found in the text. The cool ones are:`)
        console.log(result.join("\n"))

}
solve(["In the Sofia Zoo there are 311 animals in total! ::Smiley:: This includes 3 **Tigers**, 1 ::Elephant:, 12 **Monk3ys**, a **Gorilla::, 5 ::fox:es: and 21 different types of :Snak::Es::. ::Mooning:: **Shy**"])
console.log("------------------")
solve(["5, 4, 3, 2, 1, go! The 1-th consecutive banana-eating contest has begun! ::Joy:: **Banana** ::Wink:: **Vali** ::valid_emoji::"])
console.log("------------------")
solve(["It is a long established fact that 1 a reader will be distracted by 9 the readable content of a page when looking at its layout. The point of using ::LoremIpsum:: is that it has a more-or-less normal 3 distribution of 8 letters, as opposed to using 'Content here, content 99 here', making it look like readable **English**."])
