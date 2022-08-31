function solve(arr){
    
    let text = arr.lastIndexOf('\\')
    let point = arr.lastIndexOf(".")
    let ttt = arr.substring(text +1, point)
    let newww = arr.substring(point + 1)
    console.log(`File name: ${ttt}`)
    console.log(`File extension: ${newww}`)

}
solve('C:\\Internal\\training-internal\\Template.pptx')
solve('C:\\Projects\\Data-Structures\\LinkedList.cs')