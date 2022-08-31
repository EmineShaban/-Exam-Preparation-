function solve(input){
let result = {}
for (let info of input) {
    let [day, name] = info.split(" ");
    // let day = command[0]
    // let name = command[1]
    if(result.hasOwnProperty(day)){
        console.log(`Conflict on ${day}!`)
    }else{
        console.log(`Scheduled for ${day}`)
        result[day] = name
    }
}
for (let key in result) {
    console.log(key, "->", result[key])
}


}
solve(['Monday Peter',
'Wednesday Bill',
'Monday Tim',
'Friday Tim'])
// solve()
