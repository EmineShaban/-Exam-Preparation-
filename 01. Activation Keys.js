function solve(input){

let message = input.shift()
while(input[0] != "Generate"){
    let command = input.shift().split(">>>")
    if(command[0] === 'Contains'){
        if(message.includes(command[1])){
            console.log(`${message} contains ${command[1]}`)
        }else{
            console.log(`Substring not found!`)
        }
    }else if(command[0] === 'Flip'){
        if(command[1] === 'Upper'){
            let right = message.slice(0, command[2])
            let midle = message.slice(command[2], command[3]).toUpperCase()
            let left = message.slice(command[3])
            message = right+midle+left
            console.log(message)
        }else if(command[1] === 'Lower'){
            let right = message.slice(0, command[2])
            let midle = message.slice(command[2], command[3]).toLowerCase()
            let left = message.slice(command[3])
            message = right+midle+left
            console.log(message)
        }
    }else if(command[0] === 'Slice'){
        let right = message.slice(0, command[1])
        let left = message.slice(command[2])
        message = right + left
        console.log(message)
    }
}
console.log(`Your activation key is: ${message}`)
}
solve(["abcdefghijklmnopqrstuvwxyz",
"Slice>>>2>>>6",
"Flip>>>Upper>>>3>>>14",
"Flip>>>Lower>>>5>>>7",
"Contains>>>def",
"Contains>>>deF",
"Generate"])
console.log("------------------")
solve(["134softsf5ftuni2020rockz42",
"Slice>>>3>>>7",
"Contains>>>-rock",
"Contains>>>-uni-",
"Contains>>>-rocks",
"Flip>>>Upper>>>2>>>8",
"Flip>>>Lower>>>5>>>11",
"Generate"])