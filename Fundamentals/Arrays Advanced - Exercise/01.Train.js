function solve(arr){
let passangersInTrain = arr.shift().split(" ").map(Number)
let maxCapasitet = Number(arr.shift())
for (let command of arr) {
    let curCommand = command.split(" ")
    if(curCommand[0] === "Add"){
        passangersInTrain.push(Number(curCommand[1]))
    }else{
        for (let index = 0; index < passangersInTrain.length; index++) {
            if(passangersInTrain[index] + Number(curCommand[0]) <= maxCapasitet){
                passangersInTrain[index] += Number(curCommand[0])
                break
            }
        }
    }

}
console.log(passangersInTrain.join(' '))

//72 54 21 12 4 75 23 10 0
}
solve(['32 54 21 12 4 0 23',
'75',
'Add 10',
'Add 0',
'30',
'10',
'75'])
