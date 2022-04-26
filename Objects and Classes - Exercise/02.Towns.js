function solve(arr) {
    let objecttt = {}

    for (let element of arr) {
        let info = element.split(" | ")
        let townName = info[0]
        let latitude = Number(info[1]).toFixed(2)
        let longitude = Number(info[2]).toFixed(2)
        objecttt.town = townName;
        objecttt.latitude = latitude
        objecttt.longitude = longitude
        console.log(objecttt)
    }
}
solve(['Sofia | 42.696552 | 23.32601',
    'Beijing | 39.913818 | 116.363625'])
//solve(['Plovdiv | 136.45 | 812.575'])


// { town: 'Sofia', latitude: '42.70', longitude: '23.33' }
// { town: 'Beijing', latitude: '39.91', longitude: '116.36' }
// function solve(arr){

//     class AllCity{
//         constructor (town, latitude, longitude){
//             this.town = town;
//             this.latitude = latitude;
//             this.longitude = longitude;
//         }
//     }
// let newObject = []
//     for (let city1 of arr) {
//         let [town, latitude, longitude] = city1.split(" | ")
//         let arr = new AllCity(town, latitude, longitude)
//         newObject.push(arr)
//     }

//     newObject.forEach((newObject) =>console.log(newObject))


// }