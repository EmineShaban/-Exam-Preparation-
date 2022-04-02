// function solve(input) {
//     let stops = input.shift()
//     for (const token of input) {
//         let tokens = token.split(":")
//         let command = tokens[0]
//         if (command === 'Add Stop') {
//             let p1 = Number(tokens[1])
//             let p2 = tokens[2]
//             let left = stops.slice(0, p1)
//             let right = stops.slice(p1)
//             stops = left + p2 + right

//             console.log(stops)
//         } else if (command === 'Remove Stop') {
//             let p1 = Number(tokens[1])
//             let p2 = Number(tokens[2])
//             if (
//                 p1 >= 0 &&
//                 p1 <= stops.length - 1 &&
//                 p2 >= 0 &&
//                 p2 <= stops.length - 1
//               ) {
//             let left = stops.slice(p1, p2 + 1)
//             stops = stops.replace(left, "")
//             console.log(stops)
//             }else{
//                 console.log(stops)
//             }
//         } else if (command === 'Switch') {
//             let p1 = tokens[1]
//             if (stops.includes(p1)) {
//                 let p2 = tokens[2]
//                 stops = stops.replace(p1, p2)
//                 console.log(stops)
//             }else{
//                 console.log(stops)
//             }
//         } else if (command === 'Travel') {
//             console.log(`Ready for world tour! Planned stops: ${stops}`)
//             break;
//         }
//     }
// }
function solve(input) {
    let stops = input.shift()
    for (const token of input) {
        let tokens = token.split(":")
        let command = tokens[0]
        if (command === 'Add Stop') {
            let p1 = Number(tokens[1])
            if (p1 >= 0 && p1 <= stops.length) {
                let p2 = tokens[2]
                let left = stops.slice(0, p1)
                let right = stops.slice(p1)
                stops = left + p2 + right
            }
            console.log(stops)
        } else if (command === 'Remove Stop') {
            let p1 = Number(tokens[1])
            let p2 = Number(tokens[2])
            if ((p1 >= 0 && p1 < stops.length) && (p2 >= 0 && p2 < stops.length)) {
                let left = stops.slice(0, p1)
                let right = stops.slice(p2 + 1)
                stops = left + right
            }
            console.log(stops)
        } else if (command === 'Switch') {
            let p1 = tokens[1]
            if (stops.includes(p1)) {
                let p2 = tokens[2]
                stops = stops.replace(p1, p2)
            }
            console.log(stops)
        }else if(command === 'Travel'){
            console.log(`Ready for world tour! Planned stops: ${stops}`)
            break;
        }
    }
}
solve([
    "Albania:Bulgaria:Cyprus:Deuchland",
    "Add Stop:3:Nigeria",
    "Remove Stop:4:8",
    "Switch:Albania: Azərbaycan",
    "Travel"
])
//AlbNigeriaania:Bulgaria:Cyprus:Deuchland
// AlbNaania:Bulgaria:Cyprus:Deuchland
// AlbNaania:Bulgaria:Cyprus:Deuchland
// Ready for world tour! Planned stops: AlbNaania:Bulgaria:Cyprus:Deuchland