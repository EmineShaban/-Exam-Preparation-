function solve(arr) {
    let array = arr.shift().split("&")
    for (let i = 0; i < arr.length; i++) {
        let command = arr[i].split(" | ")
        let comm = command[0]
        let num = command[1]
        if (comm === 'Add Book') {
            if (array.includes(num)) {
                continue;
            } else {
                array.unshift(num)
                continue;
            }
        } else if (comm === 'Take Book') {
            let number = array.indexOf(num)
            if (number === -1) {
                continue;
            } else {
                array.splice(number, 1)        //
                continue;
            }
        } else if (comm === 'Swap Books') {
            let num2 = command[2]
            let number = array.indexOf(num)   //алиса;  number = index alica 0
            let number2 = array.indexOf(num2)  //чудеса ; number2 = index chudesa 2
            if (number === -1 || number2 === -1) {
                continue;
            } else {
                let newElement = array[number] //0 = anna
                array[number] = array[number2]
                array[number2] = newElement
                // array.splice(num, 1, num2)       // index, element, zamena   
                // array.splice(number2, 1, num)    // index, element, zamena   
                continue;
            }
        } else if (comm === 'Insert Book') {
            if (array.includes(num)) {
                continue;
            } else {
                array.push(num)
                continue;
            }
        } else if (comm === 'Check Book') {
            let number = array.includes(array[num])
            if (number === true) {
                console.log(array[num])
                continue;
            } else {
                continue;
            }
        }
    }
    console.log(array.join(", "))
}
solve((["Don Quixote&The Great Gatsby&Moby Dick",
    "Add Book | Ulysses",
    "Take Book | Don Quixote",
    "Insert Book | Alice's Adventures in Wonderland",
    "Done"]))
//    Ulysses, The Great Gatsby, Moby Dick, Alice's Adventures in Wonderland
solve((["Anna Karenina&Heart of Darkness&Catch-22&The Stranger",
    "Add Book | Catch-22",
    "Swap Books | Anna Karenina | Catch-22",
    "Take Book | David Copperfield",
    "Done"]))
//Catch-22, Heart of Darkness, Anna Karenina, The Stranger
solve((["War and Peace&Hamlet&Ulysses&Madame Bovary",
    "Check Book | 2",
    "Swap Books | Don Quixote | Ulysses",
    "Done"]))
    //Ulysses
//War and Peace, Hamlet, Ulysses, Madame Bovary