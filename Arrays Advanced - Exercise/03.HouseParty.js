function solve(arr){
    let list = []
for (let command of arr) {
        let token = command.split(" ")
        let name = token[0]
        if(token.length === 3){
            let isInclude = list.includes(name)
            if(isInclude){
                console.log(`${name} is already in the list!`)
            }else{
                list.push(name)
            }
        }else{
            let indexOfPerson = list.indexOf(name)
            if(indexOfPerson !== -1 ){
                list.splice(indexOfPerson, 1)
            }else{
                console.log(`${name} is not in the list!`)
            }
        }
}
console.log(list.join(`\n`))

}
// solve(['Allie is going!',
// 'George is going!',
// 'John is not going!',
// 'George is not going!'])
solve(['Tom is going!',
'Annie is going!',
'Tom is going!',
'Garry is going!',
'Jerry is going!'])