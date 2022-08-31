function createAssemblyLine(){

const assemblyLine = createAssemblyLine();
const myCar = {
    make: 'Toyota',
    model: 'Avensis'
};


}
// function createAssemblyLine() 
//     assemblyLine = {
//         function hasClima() {
//             myCar.tempSettings = 21;
//             myCar.temp = 21;
//         }
//     }

// adjustTemp() {
//     if (temp < tempSettings) {
//         temp += 1
//     } else if (temp > tempSettings) {
//         temp -= 1
//     } else if (temp == tempSettings) {

//     }
// }



assemblyLine.hasClima(myCar);
console.log(myCar.temp);
myCar.tempSettings = 18;
myCar.adjustTemp();
console.log(myCar.temp);

// hasClima – compose air conditioning controls into the passed-in object. This function takes an object as a
// parameter and adds to it the following properties:
// temp – number with default value 21;
// tempSettings – number with default value 21;
// adjustTemp – function which takes no arguments. If temp is less than tempSettings, this function adds 1 to temp. 
// If temp is more than tempSettings, it decreases temp by 1. If temp and tempSettings are equal, the function does nothing.