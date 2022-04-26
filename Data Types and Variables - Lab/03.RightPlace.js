function solve(str, char, string2){

    let result = ""
    for(let i = 0; i < str.length; i++){
        if(str[i] === "_"){
            result+=char
        } else{
            result+=str[i]

        }
    }
    if(string2 === result){
        console.log('Matched')
    }else{
        console.log('Not Matched')

    }


}
solve('Str_ng', 'I', 'Strong')
solve('Str_ng', 'i', 'String')
