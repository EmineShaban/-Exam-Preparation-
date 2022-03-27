function solve(input) {
    let word = input.shift();
    while (input[0] != null) {
        let token = input.shift().split("|");
        let command = token[0];
        let p1 = token[1];
        let p2 = token[2]
        if (command === 'ChangeAll'){
            word = word.split(p1).join(p2)
        }else if(command === 'Insert'){
            p1 = Number(p1)
            let left = word.slice(0, p1)
            let right = word.slice(p1)
            word = left+p2+right
        }else if(command === 'Move'){
            p1 = Number(p1)
            let left = word.slice(0, p1)
            let right = word.slice(p1)
            word = right+left
        }else if(command === 'Decode'){
            console.log(`The decrypted message is: ${word}`)
        }   
    }
}
solve([
    'zzHe',
    'ChangeAll|z|l',
    'Insert|2|o',
    'Move|3',
    'Decode'
])
console.log("------------------")
solve([
    'owyouh',
    'Move|2',
    'Move|3',
    'Insert|3|are',
    'Insert|9|?',
    'Decode'
])