function solve(arr){
arr = arr.split(" ")

for (let word of arr) {
    let code = word.charCodeAt(1)
    if(word.length > 1 && word.startsWith("#")){
        if((code >= 65 && code <=90) ||
        (code >=97 && code <= 122)){

            console.log(word.substring(1))
        }

    }
}


}
solve('Nowadays everyone uses # to tag a #special word in #socialMedia')
solve('The symbol # is known #variously in English-speaking #regions as the #number sign')
