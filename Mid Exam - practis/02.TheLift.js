function solve(arr){
let people = arr.shift()
let opashka = arr[0].split(" ").map(Number)
for (let i = 0; i < opashka.length; i++) {
    if (people > 0) {
        if (opashka[i] <= 4) {
            if (people - (4 - opashka[i]) >= 0) {
                people -= (4 - opashka[i])
                opashka[i] += (4 - opashka[i])

            } else {
                opashka[i] += people;
                people -= people;
            }
        }

    } else {
        break;
    }
}
if (people > 0) {

    console.log(`There isn't enough space! ${people} people in a queue!`);
    console.log(opashka.join(" "));
} else if (opashka.some(Element => Element !== 4)) {
    console.log("The lift has empty spots!");
    console.log(opashka.join(" "));
} else {
    console.log(opashka.join(" "));
}
}
solve([
    "15",
    "0 0 0 0 0"
   ])
// solve([
//     "20",
//     "0 2 0"
//    ])